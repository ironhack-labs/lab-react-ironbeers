import http from "./BaseSevice";

export const beerList = http.get("/beers")
export const beerRandome = http.get("/beers/random")
export const beerDetails = (id) => http.get(`/beers/:${id}`)