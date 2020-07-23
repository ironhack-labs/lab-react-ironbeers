import axios from 'axios';

const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export default {
  service,
  getAllBeers() {
    return service.get('/');
  },
  getOneBeer(id) {
    return service.get('/' + id);
  },
  getARandomBeer() {
    return service.get('/random');
  },
  queryBeer() {
    return service.get('/search');
  },
  addABeer(beer) {
    return service.post('/new', beer);
  },
};
