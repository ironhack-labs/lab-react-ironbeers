import axios from "axios";

const instance = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com"
});

export const flechAllBeers = async () => {
  const res = await instance.get(`/beers`);
  console.log(res.data);
  return res.data;
};

export const flechSingleBeer = async id => {
  const response = await instance.get(`/beers/${id}`);
  return response.data;
};

export const flechRandomBeer = async () => {
  const response = await instance.get(`/beers/random`);
  return response.data;
};

export const addNewBeer = async data => {
  const response = await instance.post(`/beers/new`, data);
  return response.data;
};
