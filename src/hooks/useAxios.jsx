import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://lifedrop-rosy.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
