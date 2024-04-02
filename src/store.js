import authReducer from "./reducers/authReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: {
    user:userReducer,
    auth:authReducer,
    product:productReducer
} });

export default store;