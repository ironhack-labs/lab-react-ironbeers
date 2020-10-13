const axios = require('axios');
const baseURL = 'https://ih-beers-api2.herokuapp.com/beers';

export const getBeers = () => {
  return axios.get(baseURL).then((response) => response.data);
};

export const getRandomBeer = () => {
  return axios.get(`${baseURL}/random`).then((response) => response.data);
};

export const getBeerById = (id) => {
  return axios.get(`${baseURL}/${id}`).then((response) => response.data);
};

export const createBeer = (body) => {
  return axios.post(`${baseURL}/new`, body).then((response) => response.data);
};
