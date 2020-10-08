import axios from 'axios';

const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export default {
  service,

  getBeers() {
    return service.get('/');
  },
  getOne(id) {
    return service.get('/' + id);
  },
  getRandom() {
    return service.get('/random');
  },

  createOne(data) {
    return service.post('/new', data);
  },

  search(query) {
    return service.get(`/search?q=${query}`);
  },
};
