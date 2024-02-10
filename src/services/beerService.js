import httpBeers from "./baseBeerService";

export const getBeers = () => httpBeers.get("/beers")
export const getBeerDetail = (id) =>
  httpBeers.get(`/beers/${id}`);

export const createBeer = (data) => httpBeers.post('/beers/new', data)
export const getRandomBeer = () => httpBeers.get('/beers/random');