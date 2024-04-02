import { login, saveTokenInLocalStorage } from "../services/authService";
import { LOGIN_CONFIRMED_ACTION, LOGOUT_ACTION } from "../utils/type";
import { toast } from 'react-toastify';

export function logout(history) {
    localStorage.removeItem('userDetails');
    history.push('/login');
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

export function loginAction(username, password, history) {
    return (dispatch) => {
        login(username, password)
            .then((response) => {
                response.data=response.data.data;
                saveTokenInLocalStorage(response.data);
                dispatch(loginConfirmedAction(response.data));
                toast.success('User Logged is Successfully');
				history.push("dashboard");                
            })
            .catch((error) => {
				console.log(error);
                // const errorMessage = formatError(error.response.data);
                // dispatch(loginFailedAction(errorMessage));
            });
    };
}

export const isAuthenticated = (state) => {
    if (state.auth.auth.access_token) return true;
    return false;
};
