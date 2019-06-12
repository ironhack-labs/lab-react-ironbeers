import axios from 'axios';

const http = axios.create({
  baseURL: `https://ih-beer-api.herokuapp.com/beers`,
});

http.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 403 || error.response.status === 401) {
      window.location.assign("/home");
    } else {
      return Promise.reject(error);
    }
  }
)

export default http;
