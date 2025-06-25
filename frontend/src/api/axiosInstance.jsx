import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1/workouts",
  withCredentials: true, // Si usas cookies
});

export default axiosInstance;
