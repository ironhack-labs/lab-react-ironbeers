import http from "./BaseService";

export const getAllbeers = () => http.get('beers')
export const oneBeer = (id) => http.get(`beers/${id}`)
export const ramdonBeer = () => http.get(`beers/random`)
export const newBeer = () => http.post('new')