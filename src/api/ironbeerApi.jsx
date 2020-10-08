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
  getRandomBeer() {
    return service.get('/random');
  },
};
