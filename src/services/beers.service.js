import axios from "axios";

export default class BeersService {
  constructor() {
    this.instance = axios.create({
      baseURL: `https://ih-beers-api2.herokuapp.com/beers`,

    });
  }
  getBeers = () => this.instance.get('/');
  getRandomBeer = () => this.instance.get('/random-beer');
  createBeer = (data) => this.instance.post('/', data);
  getOneBeer = (id) => this.instance.get(`/${id}`);
  searchBeer= (name)=> this.instance.get(`/search?q=${name}`);
}
