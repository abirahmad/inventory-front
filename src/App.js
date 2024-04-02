import { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { useDispatch, connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
// import LoginForm from './components/auth/LoginForm';
import { checkAutoLogin } from './services/authService';
import { isAuthenticated } from './actions/authActions';
import Index from './jsx';
import axiosDefault from './utils/axios-default';
// import './Sidebar.css'; // Import your custom sidebar CSS
const Registration = lazy(() => import('./jsx/components/auth/Registration'));
const Login = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./jsx/components/auth/LoginForm')), 500);
    });
});

const Preloader = () => (
    <div id="preloader">
      <div className="sk-three-bounce">
        <div className="sk-child sk-bounce1"></div>
        <div className="sk-child sk-bounce2"></div>
        <div className="sk-child sk-bounce3"></div>
      </div>
    </div>
  );

function App(props) {
  axiosDefault();
    const dispatch = useDispatch();
    useEffect(() => {
        checkAutoLogin(dispatch, props.history);
    }, [dispatch, props.history]);

    let routes = (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/page-register' component={Registration} />
            {/* <Route path='/page-forgot-password' component={ForgotPassword} /> */}
        </Switch>
    );

    return (
        <Suspense fallback={<Preloader />}>
          {props.isAuthenticated ? <Index /> : routes}
        </Suspense>
      );

};


const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default withRouter(connect(mapStateToProps)(App)); 
