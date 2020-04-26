import axios from 'axios';

const API_ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers';

const API = (method, route, data) => {
  const request = axios({
    method,
    url: API_ENDPOINT + route,
    data,
  });
  return request;
}

export default API;
