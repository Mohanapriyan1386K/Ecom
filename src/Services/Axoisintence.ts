import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request sent:", config);
    return config; 
  },
  (error) => {
    return Promise.reject(error); 
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response Received:", response);
    return response;
  },
  (error) => {
    console.error("Response Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;

