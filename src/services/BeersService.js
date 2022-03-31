import http from "./BaseService";

export const beerList   = () => http.get("/beers")
export const beerRandom = () => http.get("/beers/random")
export const beerSingle = (id) => http.get(`/beers/${id}`)
export const beerNew    = (data) => http.post(`/beers/new`, data)

