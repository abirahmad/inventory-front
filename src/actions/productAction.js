import Axios from "axios";
import * as Types from "../utils/type";
import { toast } from "react-toastify";

export const productAddAction = (values) => async (dispatch) => {
    let responseData = {
        message: "",
        isLoading: true,
        tokenData: "",
        data: values,
        status: true
    };
    dispatch({ type: Types.PRODUCT_ADD_ACTION, payload: responseData });
    var postData = {
        name: values.name,
        quantity: values.quantity,
        description: values.description
    }

    try {
        await Axios.post(`product`, postData, {})
            .then((response) => {
                console.log('response', response.status)
                response.data = response.data.data;
                if (response.status == 200) {
                    toast.success('Product Successfully created');
                    window.location.assign('/');
                }

            })
            .catch((err) => {
                let message = err.response.data.message;
                toast.error(message);
                //   console.log('loginResponse.message', loginResponse.message)
            });
    } catch (error) {
        //   loginResponse.message = "Something went wrong, Please try again !";
    }

    responseData.isLoading = false;
    dispatch({ type: Types.PRODUCT_ADD_ACTION, payload: responseData });

    // return axios.post(LOGIN_URL, { email, password });
};

export const productListAction = () => async (dispatch) => {
    let responseData = {
        message: "",
        isLoading: true,
        tokenData: "",
        data:[],
        status: true
    };

    await Axios.get(`product`)
        .then((response) => {
            console.log('response', response.data.data.data)
            responseData.data=response.data.data.data
            responseData.isLoading=false;
            console.log('responseData', responseData)
            dispatch({ type: Types.PRODUCT_LIST_ACTION, payload: responseData });
        })
        .catch((err) => {
            let message = err.response.data.message;
            toast.error(message);
        });
    
};
export const productSingleAction = (id) => async (dispatch) => {
    let responseData = {
        message: "",
        isLoading: true,
        tokenData: "",
        data:[],
        status: true
    };

    await Axios.get(`product/${id}`)
        .then((response) => {
            console.log('response', response)
            responseData.data=response.data.data
            responseData.isLoading=false;
            dispatch({ type: Types.PRODUCT_SINGLE_ACTION, payload: responseData });
        })
        .catch((err) => {
            console.log('err', err)
            let message = err.response.data.message;
            toast.error(message);
        });
    
};

export const productEditAction = (values,id) => async (dispatch) => {
    let responseData = {
        message: "",
        isLoading: true,
        tokenData: "",
        data: values,
        status: true
    };
    dispatch({ type: Types.PRODUCT_EDIT_ACTION, payload: responseData });
    var postData = {
        name: values.name,
        quantity: values.quantity,
        description: values.description
    }

    try {
        await Axios.put(`product/${id}`, postData, {})
            .then((response) => {
                console.log('response', response.status)
                return
                response.data = response.data.data;
                if (response.status == 200) {
                    toast.success('Product Successfully created');
                    window.location.assign('/');
                }

            })
            .catch((err) => {
                let message = err.response.data.message;
                toast.error(message);
                //   console.log('loginResponse.message', loginResponse.message)
            });
    } catch (error) {
        //   loginResponse.message = "Something went wrong, Please try again !";
    }

    responseData.isLoading = false;
    dispatch({ type: Types.PRODUCT_EDIT_ACTION, payload: responseData });

    // return axios.post(LOGIN_URL, { email, password });
};