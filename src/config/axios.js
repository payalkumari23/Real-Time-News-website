import axios from "axios";



const api = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  timeout: 15000,
});

export default api;