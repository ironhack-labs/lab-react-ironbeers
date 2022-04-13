import http from "./BaseServices";


export const getBeerList = () => http.get('/beers')
export const getBeerDetail = (id) => http.get('/beers/random')
export const newBeer = (data) => http.post('/beers/new', data)
export const filterBeer = (query) => http.get(`/beers/search?=${query}`)

