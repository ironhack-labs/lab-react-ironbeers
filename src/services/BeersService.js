import http from "./BaseService";

export const getBeers = () => http.get('/beers')
export const beerDetail = (id) => http.get(`/beers/${id}`)
export const randomBeer = () => http.get('/beers/random')
export const newBeer = (data) => http.post('/beers/new', data)
export const searchBeer = (query) => http.get(`/beers/search?q=${query}`)