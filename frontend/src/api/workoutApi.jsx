import axiosInstance from "./axiosInstance";

export const getWorkouts = async (userId) => {
  const response = await axiosInstance.get(`/workouts?user=${userId}`);
  return response.data.data; // Ajusta si tu backend responde distinto
};
