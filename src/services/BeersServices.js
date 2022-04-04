import http from "./BaseServices";

export const getBeerList = () => http.get('/beers')
export const getBeerDetail = (id) => http.get(`/beers/${id}`)
export const getRandomBeer = () => http.get('/beers/random')
