import axios from 'axios';

const API_BASE = 'https://ih-beers-api2.herokuapp.com/beers';

const API = (method, route, data) => {
  const request = axios({
    method,
    url: API_BASE + route,
    data,
  });
  return request;
}

export default API;
