import axios from 'axios';

class BeersApi {
  constructor() {
    this.app = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com',
    });
  }

  getAllBeers = () => this.app.get('/beers');
  getOneBeer = (id) => this.app.get(`/beers/${id}`);
  getRandomBeer = () => this.app.get('/beers/random');
  createNewBeer = (newBeer) => this.app.post('/beers/new', newBeer);
}

export default BeersApi;
