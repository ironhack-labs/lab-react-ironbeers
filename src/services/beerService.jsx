import http from './baseService';

export const list = () => http.get('/beers');

export const getEachBeer = (id) => {
    return http.get(`/beers/${id}`);
}

export const getRandomBeer = () => http.get('/beers/random');

export const postNewBeer = (beer) => http.post('/beers/new', beer);