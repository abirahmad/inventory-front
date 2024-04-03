import { login, saveTokenInLocalStorage } from "../services/authService";
import { LOGIN_CONFIRMED_ACTION, LOGIN_FAILED_ACTION, LOGOUT_ACTION } from "../utils/type";
import { toast } from 'react-toastify';

export function logout(history) {
    console.log('history', history)
    localStorage.removeItem('userDetails');
    localStorage.removeItem('access_token');
    history.push("login"); 
    return {
        type: LOGOUT_ACTION,
    };
}

export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}

export function loginFailedAction(data) {
    return {
      type: LOGIN_FAILED_ACTION,
      payload: data,
    };
  }

export function loginAction(username, password, history) {
    
    return (dispatch) => {
        let response={
            data:{},
            showLoading:true
        }
        dispatch(loginConfirmedAction(response));
        login(username, password)
            .then((response) => {
                response.data=response.data.data;
                response.showLoading=false;
                saveTokenInLocalStorage(response);
                dispatch(loginConfirmedAction(response));
                toast.success('User Logged is Successfully');
				history.push("dashboard");                
            })
            .catch((error) => {
				console.log(error.response.data);
                // const errorMessage = formatError(error.response.data);
                toast.error(error.response.data.message);
                dispatch(loginFailedAction(error.response.data));
            });
    };
}

export const isAuthenticated = (state) => {
    if (state.auth.auth.access_token) return true;
    return false;
};
