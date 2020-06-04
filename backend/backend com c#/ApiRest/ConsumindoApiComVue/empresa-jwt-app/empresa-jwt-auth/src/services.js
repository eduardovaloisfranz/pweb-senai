import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:44350/",
});

axiosInstance.interceptors.request.use(
  function(config) {
    config.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`;
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// `Bearer ${sessionStorage.getItem("token")}`;
export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  delete(endpoint, body) {
    return axiosInstance.delete(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
};
