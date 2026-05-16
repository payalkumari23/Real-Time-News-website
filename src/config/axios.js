import axios from "axios";



const api = axios.create({
  baseURL: 'https://gnews.io/api/v4/',
  timeout: 15000,
});

export default api;