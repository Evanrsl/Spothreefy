import axios from "axios";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

const axiosInstance = axios.create({
  baseURL: VITE_SERVER_URL, // Server base URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Making request to", config.url);
    return config;
  },
  (error) => {
    console.log("Request error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
