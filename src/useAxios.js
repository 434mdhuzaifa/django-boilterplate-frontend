import axios from "axios";

const cAxios = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

const customAxios = () => {
  return cAxios;
};
export default customAxios;
