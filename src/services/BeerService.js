import { http } from './BaseService';

export const listBeers = () => http.get('/beers');

export const beerDetail = (id) => http.get(`/beers/${id}`)