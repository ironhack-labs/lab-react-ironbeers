import { http } from './BaseService';

export const listBeers = () => http.get('/beers');

export const beerDetail = (id) => http.get(`/beers/${id}`)

export const randomBeer = () => http.get('/beers/random')

export const newBeer = (beer) => http.post("/beers/new", beer)