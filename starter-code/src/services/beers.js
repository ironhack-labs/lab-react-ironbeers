import axios from "axios";

const baseURL = "https://ih-beers-api2.herokuapp.com/beers";

const beersService = axios.create({
  baseURL
});

export const getAllBeers = async () => {
  const { data } = await beersService.get();
  return data;
};

export const getABeer = async id => {
  const { data } = await beersService.get(`/${id}`);
  return data;
};

export const getARandomBeer = async () => {
  const { data } = await beersService.get("/random");
  return data;
};

export const addABeer = async (beer) => {
    await beersService.post('/new', beer)
};