// import Axios from "axios";
// // import { getSession } from 'next-auth/client';

// const axiosDefault = () => {
//     Axios.defaults.baseURL = process.env.REACT_APP_API_SERVER;
//     Axios.interceptors.request.use(async (config) => {
//         // const session = await getSession();
//         let accessToken = localStorage.getItem('userDetails');
//         console.log('accessToken', accessToken)

//         if(accessToken) {
//           config.headers.Authorization = `Bearer ${accessToken}`
//         }
//         config.headers['Content-Type'] = 'application/json';
//         return config;
//     }, error => Promise.reject(error));
// }

// export default axiosDefault;

import Axios from "axios";
const axiosDefault = () => {
    Axios.defaults.baseURL = process.env.REACT_APP_API_SERVER;
    Axios.interceptors.request.use(async (config) => {
        // const session = await getSession();
      const auth_user = JSON.parse(localStorage.getItem("userDetails"));
      let token = "";
      if (auth_user != null) {
        token = auth_user.access_token;
      } else {
        token = false;
      }
        if(token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    }, error => Promise.reject(error));
}

export default axiosDefault;


