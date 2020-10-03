import axios from 'axios';

const http = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const getBeers = () => {
  return http.get('/').then((response) => response);
};

export const getBeer = (id) => {
  return http.get(`/${id}`).then((response) => response);
};

export const getRandomBeer = (id) => {
  return http.get('/random').then((response) => response);
};

export const setNewBeer = (body) => {
  return http.post('/new', body).then((response) => response);
};
