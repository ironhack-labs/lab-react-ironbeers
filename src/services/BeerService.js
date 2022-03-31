import http from "./BaseService";

export const beerList = () => http.get("/beers")