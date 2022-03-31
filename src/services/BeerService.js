import http from "./BaseSevice";

export const BeerList = http.get("/beers")
export const BeerRandome = http.get("/beers/random")
export const BeerDetails = http.get("/beers/:id")