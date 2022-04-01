import http from './BaseService';

export const allBeers = () => http.get('/beers');
export const beerDetail = (id) => http.get(`/beers/${id}`);
export const randomBeer = () => http.get('/random');
export const newBeer = () => http.get('/new-beer');