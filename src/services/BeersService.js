import http from "./BaseService";

export const listBeers = () => http.get("/beers");

export const getBeerDetail = (beerId) => http.get(`/beers/${beerId}`);
