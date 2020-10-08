import axios from 'axios';
import { findDOMNode } from 'react-dom';

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

  getRandomeBeer() {
    return service.get('/random');
  },

  createOne(data) {
    return service.post('/new', data);
  },

  findOne(query) {
    return service.get(`/search?q=${query}`);
  },
};
