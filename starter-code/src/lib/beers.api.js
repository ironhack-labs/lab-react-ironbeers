import axios from "axios";

const instance = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com"
});

export const listAllBeers = async () => {
  const res = await instance.get(`beers`);
  return res.data;
};

export const beerDetails = async id => {
  const response = await instance.get(`/beers/${id}`);
  return response.data;
};

export const randomBeer = async () => {
  const response = await instance.get(`/beers/random`);
  return response.data;
};

export const createBeer = async data => {
  const response = await instance.post(`/beers/new`, data);
  return response.data;
};
