import { loginConfirmedAction, logout } from "../actions/authActions";
import Axios from "axios";

export function checkAutoLogin(dispatch, history) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(logout(history));
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expires_at);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(logout(history));
        return;
    }
    dispatch(loginConfirmedAction(tokenDetails));

    const timer = expireDate.getTime() - todaysDate.getTime();
}

export function saveTokenInLocalStorage(tokenDetails) {
    // tokenDetails.expireDate = new Date(
    //     new Date().getTime() + tokenDetails.expires_at * 1000,
    // );
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
    localStorage.setItem('access_token', JSON.stringify(tokenDetails.access_token));
}

export function login(username, password) {
    let postData = {
        username: username,
        password: password,
        remember: false,
      };
    // return axios.post(
    //     `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
    //     postData,
    // );
    return Axios.post(`login`, postData, {})
}

