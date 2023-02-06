import axios from "axios";
const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers";

export const getAllBeers = () => {
  return axios.get(BASE_URL);
};

export const getBeer = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

export const getRandomBeer = () => {
  return axios.get(`${BASE_URL}/random`);
};

export const addBeer = (beer) => {
  return axios.post(`${BASE_URL}/new`, beer);
};
