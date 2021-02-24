import axios from 'axios'

const beerApi = axios.create({
    baseURL:'https://ih-beers-api2.herokuapp.com/beers',
});

export const getAllBeersService = () => beerApi.get('/');

export const getBeerService = (beerId) => beerApi.get(`/${beerId}`);

export const getRandomBeer = () => beerApi.get('/random');

export const createBeerService = (beer) => beerApi.post('/new', beer);

export const queryBeerService = (query) => beerApi.get(`/search?q=${query}`);
