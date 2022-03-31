import http from './BaseServices';

export const beersList = () => http.get("/beers");

export const beerDetail = (id) => http.get(`/beers/${id}`);

export const randomBeer = () => http.get('/beers/random');

