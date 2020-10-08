import axios from 'axios';

const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export default {
  service,

  getAllBeers() {
    return service.get('/');
  },
  
  getOne(id) {
    return service.get('/' + id);
  },

  getRandom() {
    return service.get('/random');
  },

  createOne(body) {
    return service.post('/new', body);
  },

  filter(query) {
    return service.get(`/search?q=${query}`)
  }
};
