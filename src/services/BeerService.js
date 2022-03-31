import http from "./BaseService";

export const beerList = () => http.get("/beers");
export const randomBeer = () => http.get("/beers/random");
/* export const newBeer = (data) => http.post("/beers/new", data) */