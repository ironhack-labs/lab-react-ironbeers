import axios from 'axios';

const beersApi = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com"
});

export const Beers = async () => {
  const response = await beersApi.get("/beers");
  return response.data;
};

export const beerDetails = async id => {
  const response = await beersApi.get(`/beers/${id}`);
  return response.data;
};

export const randomBeer = async () => {
  const response = await beersApi.get("/beers/random");
  return response.data;
}

export const createBeer = async data => {
  const response = await beersApi.post(`/beers/new`, data);
  return response.data;
}


