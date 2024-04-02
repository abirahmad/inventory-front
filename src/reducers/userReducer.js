import * as Types from "../utils/type";

const initialState = {
    userData: {},
    username: '',
    password: '',
    isLoggedIn: false,
    errorMessage: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };

        case Types.POST_LOGIN_DATA:
            if (action.payload.status) {
                localStorage.setItem("userData", JSON.stringify(action.payload.data));
                localStorage.setItem("access_token", action.payload.tokenData);
            }
            return {
                ...state,
                authToken: action.payload.tokenData,
                message: action.payload.message,
                status: action.payload.status,
                userData: action.payload.data,
                isLoading: action.payload.isLoading,
            };
        default:
            return state;
    }
};
export default userReducer;