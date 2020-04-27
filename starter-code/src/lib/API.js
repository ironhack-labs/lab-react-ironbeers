import axios from 'axios';

const BASE_URL = 'https://ih-beers-api2.herokuapp.com/beers';

const API = (request, actions) => {
  const { method, route, data } = request;
  const { onSuccess, onFailure } = actions;
  axios({
    method,
    url: BASE_URL + route,
    data,
  })
    .then((response) => onSuccess(response))
    .catch((error) => onFailure(error))
}

export default API;
