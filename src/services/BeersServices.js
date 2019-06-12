import http from './BaseServices';

const getBeers = () => http.get('/')

const singleBeer = idBeer => http.get(`/${idBeer}`);

const RandomBeer = () => http.get(`/random`);

const searchBeer = query => http.get(`/search?q=${query}`);

const newBeer = beer => http.post('/new', beer)


export default {
  getBeers,
  singleBeer,
  searchBeer,
  newBeer,
  RandomBeer
}


