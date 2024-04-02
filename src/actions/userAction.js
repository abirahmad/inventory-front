import Axios from "axios";
import * as Types from "../utils/type";
import { toast } from "react-toastify";
import { loginConfirmedAction } from "./authActions";
import { runLogoutTimer, saveTokenInLocalStorage } from "../services/authService";

export const setUsername = (username) => ({ type: 'SET_USERNAME', payload: username });
export const setPassword = (password) =>
  ({ type: 'SET_PASSWORD', payload: password });

export const postLoginData = (values) => async (dispatch) => {
  console.log('values', values.history)
  let loginResponse = {
    message: "",
    isLoading: true,
    tokenData: "",
    data: null,
    status: true
  };
  dispatch({ type: Types.POST_LOGIN_DATA, payload: loginResponse });

  try {
    let postData = {
      username: values.username,
      password: values.password,
      remember: false,
    };
    await Axios.post(`login`, postData, {})
      .then((response) => {
        response.data=response.data.data;
        console.log('response.data', response.data)
        saveTokenInLocalStorage(response.data);
        dispatch(loginConfirmedAction(response.data));
        values.history.push({ pathname: "/dashboard" });
        // if (loginResponse.status == true) {
        //   toast.success(message, {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "colored",
        //   });
        //   window.location.assign('/');
        // }

      })
      .catch((err) => {
        loginResponse.message = err.response.data.message;
        // toast.error(loginResponse.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
        console.log('loginResponse.message', loginResponse.message)
      });
  } catch (error) {
    loginResponse.message = "Something went wrong, Please try again !";
  }

  // loginResponse.isLoading = false;
  // dispatch({ type: Types.POST_LOGIN_DATA, payload: loginResponse });

  // return axios.post(LOGIN_URL, { email, password });
};

// export const getUserDataAction=(dispatch)=>{

//   var userData=localStorage.getItem('')
// }