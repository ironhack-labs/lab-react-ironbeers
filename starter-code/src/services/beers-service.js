import axios from 'axios'

class BeersService {
  constructor() {
    this.BeersService = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com' });
  }

  getAllBeers() {
    return this.BeersService.get('/beers');
  }
}

const beersService = new BeersService();
export default beersService;