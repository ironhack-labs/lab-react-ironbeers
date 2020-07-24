import axios from 'axios';

const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export default {
  service,
  getAllBeers() {
    console.log('i ask API for all the beers');
    return service.get('/');
  },
  getOneBeer(id) {
    console.log('i ask API for one beer thanks to ID');
    return service.get('/' + id);
  },
  getRandomBeer() {
    console.log('i ask API for a random beer');
    return service.get('/random');
  },
  createNewBeer(newBeerState) {
    console.log('attempt to post new beer');
    return service.post('/new', newBeerState);
  },
  searchOneBeer(beer) {
    console.log('asking api for a beer thanks to name');
    return service.get('/search?q=' + beer);
  },
};
