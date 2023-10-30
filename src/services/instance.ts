import axios from "axios";

const instance = axios.create({
  baseURL: 'http://192.168.1.119:2000/api/',
  timeout: 1000,
  headers: {'X-X-Requested-With': 'XMLHttpRequest'},
  responseType: "json"
});

export default instance;