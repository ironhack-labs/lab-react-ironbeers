import http from "./baseService";

export const getBeers = () => http.get("/beers");

export const getBeersDetails = (beerId) => http.get(`/beers/${beerId}`);

export const getRandomBeer = () => http.get("/beers/random");

export const postNewBeer = (data) => http.post("/beers/new", data);
