import axios from "axios";

// config base url instance which is http://127.0.0.1:3000/api/v1

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3000/api/v1",
});

export default axiosInstance;
