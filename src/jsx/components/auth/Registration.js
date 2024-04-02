import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, postLoginData } from '../../../actions/userAction';
import { ToastContainer, toast } from 'react-toastify';

const Registration = () => {

  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (username.trim() === '') {
      toast.error('Please enter your username!');
      return;
    }

    if (password.trim() === '') {
      toast.error('Please enter your password!');
      return;
    }
  let values={
    username:username,
    password:password,
  }
    // Simulate login (replace with actual login logic)
    dispatch(postLoginData(values)); // Dispatch login success action
    dispatch(setUsername(username)); // Dispatch action to update username
    dispatch(setPassword(password));
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card" style={{ width: 500, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)' }}>
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => dispatch(setUsername(e.target.value))}
                aria-describedby="usernameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Registration;
