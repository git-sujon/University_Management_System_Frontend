import { authKey } from "@/Constants/storageKeys";
import { getFromLocalStorage } from "@/utils/localStorage";
import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  // @ts-ignore
  function (response) {

   
    const responseData = {
      data: response?.data?.data,
      meta: response?.data?.meta
    };

    return responseData;
  },
  function (error) {
    const errorResponse = {
      statusCode: error?.response?.data?.status || 500,
      message: error?.response?.data?.message || "something went wrong",
      errorMessages: error?.response?.data?.message,
    };

    return errorResponse
  }
);

export { axiosInstance };
