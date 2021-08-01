import axios from 'axios';

const beerService = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

function getAllBeers() {
  return beerService.get('/').then((response) => response.data);
}

function getSomeBeers(query) {
  console.log('query', query);
  return beerService
    .get(`/search?q=${query}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

function newBeer(beerData) {
  return beerService.post('/new').then((res) => res.data);
}

export { beerService, getAllBeers, getSomeBeers, newBeer };
