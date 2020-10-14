const axios = require('axios');

const http = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const getBeers = () => {
  return http.get('').then((response) => response.data);
};

export const getRandomBeer = () => {
  return http.get('/random').then((response) => response.data);
};

export const getBeerById = (id) => {
  return http.get(`${id}`).then((response) => response.data);
};

export const createBeer = (body) => {
  return http.post('/new', body).then((response) => response.data);
};

export const findBeer = (query) => {
  return http.get(`/search?q=${query}`).then((response) => response.data);
};
