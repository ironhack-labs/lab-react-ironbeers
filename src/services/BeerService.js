import http from "./BaseService";

export const beerList = () => http.get("/beers");
export const randomBeer = () => http.get("/beers/random");