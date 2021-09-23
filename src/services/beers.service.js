import axios from 'axios';

export default class BeersService {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
  }

  getBeers = () => this.instance.get('/');
  getOneBeer = (id) => this.instance.get(`/${id}`);
  getRandomBeer = () => this.instance.get('/random');
  createBeer = (beer) => this.instance.post('/new', beer);
}
