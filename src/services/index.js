import axios from 'axios';

class BeersService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
    });
  }

  getAllBeers = () => this.api.get('/');
  getBeerById = (id) => this.api.get(`/${id}`);
  getRandomBeer = () => this.api.get('/random');
  addBeer = (newBeer) => this.api.post('/new', newBeer);
  getMatch = (query) => this.api.get(`/search?q=${query}`);
}
export default BeersService;
