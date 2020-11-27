import axios from 'axios';

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers';

const beersService = axios.create({ baseURL });

export const getAllBeers = () => beersService.get('');

export const getOneBeer = (id) => beersService.get(`/${id}`);

export const getRandomBeer = () => beersService.get(`/random`);

export const createNewBeer = (newBeer) => beersService.post(`/new`, newBeer);

export const searchABeer = (query) => beersService.get(`search?q=${query}`);
