import axios from 'axios';

class BeersService {
  constructor(){
    this.instance = axios.create({
      baseURL: "https://ih-beers-api2.herokuapp.com/beers"
    })
  }

  getBeers = () => this.instance.get("/");
  getOneBeer = (_id) => this.instance.get(`/${_id}`);
  getRandomBeer = () => this.instance.get(`/random`);
  createBeer = (beer) => this.instance.post("/", beer);
}

export default BeersService;