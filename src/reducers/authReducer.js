import * as Types from "../utils/type";

const initialState = {
    auth: {
        username:'',
        password:''
    },
    username:'',
    password:'',
    errorMessage: '',
    successMessage: '',
    showLoading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_USERNAME':
            return { ...state, username: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };

        case Types.LOGOUT_ACTION:
            console.log('action.payload', action.payload)
            return {
                ...state,
                errorMessage: '',
                successMessage: '',
                auth: {
                    username: '',
                    token: '',
                    localId: '',
                    expiresIn: '',
                    refreshToken: '',
                },
            };
        case Types.LOGIN_CONFIRMED_ACTION:
            return {
                ...state,
                auth: action.payload.data,
                errorMessage: '',
                successMessage: 'Login Successfully Completed',
                showLoading: false,
            };
        case Types.LOGIN_FAILED_ACTION:
            return {
                ...state,
                auth: action.payload.data,
                errorMessage: '',
                successMessage: 'Login failed',
                showLoading: false,
            };
        default:
            return state;
    }
};
export default authReducer;