import axios from 'axios';

const http = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/',
});

export const getBeers = () => {
  return http.get('/beers').then((response) => response);
};
