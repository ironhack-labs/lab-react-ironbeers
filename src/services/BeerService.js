import http from './BaseService';

export const beers = () => http.get('/beers');
export const beerDetail = (id) => http.get(`/beers/${id}`)