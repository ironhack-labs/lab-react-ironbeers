import http from "./BaseServices";

export const listBeers = () => http.get("/beers");
export const getBeerDetail = (beerId) => http.get(`/beers/${beerId}`);
export const getBeerRandom = () => http.get("/beers/random");
export const postNewBeer = (beer) => http.post('/beers/new', beer);
