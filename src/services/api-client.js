import axios from 'axios';

const http = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/',
});

export const getBeers = () => {
  return http.get('/beers').then((response) => response);
};
export const getBeer = (id) => {
  return http.get(`/beers/${id}`).then((response) => response);
};
export const getRandomBeer = (id) => {
  return http.get(`/beers/random`).then((response) => response);
};
