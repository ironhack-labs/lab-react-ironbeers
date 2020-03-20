import axios from 'axios';

const beersService = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers/'
});

export const fetchAllBeers = async () => {
  const { data } = await beersService.get();
  return data;
};

export const fetchSingleBeer = async endpoint => {
  const { data } = await beersService.get(`/${endpoint}`);
  return data;
};

export const searchBeer = async query => {
  const { data } = await beersService.get(`/search?q=${query}`);
  return data;
};

export const addNewBeer = async data => {
  await beersService.post('/new', data);
};
