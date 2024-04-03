import * as Types from "../utils/type";

const initialState = {
    productFrom: {
        name: '',
        quantity: 0,
        description: '',
        image: '',
    },
    productList: [],
    productDeatils: {},
    username: '',
    password: '',
    errorMessage: '',
    isLoading: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case Types.PRODUCT_ADD_ACTION:
            return {
                ...state,
                productForm: action.payload.data,
                isLoading: action.payload.isLoading,
            };

        case Types.PRODUCT_EDIT_ACTION:
            return {
                ...state,
                productForm: action.payload.data,
                isLoading: action.payload.isLoading,
            };

        case Types.PRODUCT_LIST_ACTION:
            return {
                ...state,
                productList: action.payload.data,
                isLoading: action.payload.isLoading,
            };
        case Types.PRODUCT_SINGLE_ACTION:
            return {
                ...state,
                productDeatils: action.payload.data,
                isLoading: action.payload.isLoading,
            };
        default:
            return state;
    }
};
export default productReducer;