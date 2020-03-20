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
