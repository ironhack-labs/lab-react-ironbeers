import axios from 'axios';

class BeerService {
  constructor(){
    this.instance = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
    
    })
  }

  getBeer = () => this.instance.get("/");
  getOneBeer = (id) => this.instance.get(`/${id}`);
  getOneBeerRandom = () => this.instance.get("/random");
  createBeer = (beer) => this.instance.post("/", beer);
}

export default BeerService;