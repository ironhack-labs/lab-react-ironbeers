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
  addBeer = () => this.api.post('/new');
  getMatch = (query) => this.api.get(`/search?q=${query}`);
}
export default BeersService;
