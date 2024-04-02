import * as Types from "../utils/type";

const initialState = {
    auth: {},
    errorMessage: '',
    successMessage: '',
    showLoading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case Types.LOGOUT_ACTION:
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
                auth: action.payload,
                errorMessage: '',
                successMessage: 'Login Successfully Completed',
                showLoading: false,
            };
        default:
            return state;
    }
};
export default authReducer;