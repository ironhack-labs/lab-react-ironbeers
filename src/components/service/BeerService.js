import axios from 'axios';

export default class Beer {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/beers',
    });
  }

  getAllBeers = () => this.service.get('/');
}
