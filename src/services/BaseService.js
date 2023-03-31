import axios from "axios";

const http = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com",
});

http.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default http;
