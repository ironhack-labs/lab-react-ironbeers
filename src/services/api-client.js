const axios = require('axios');

const http = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com',
});

export const createBeer = (data) => {
  return http.post('/beers/new', data)
};
