import axios from "axios";

class BeersService {
  constructor() {
    this.api = axios.create({
      baseURL: "https://ih-beers-api2.herokuapp.com/",
    });
  }

  getAllBeers = () => {
    return this.api.get("beers");
  };

  getOneBeer = (beerId) => {
    return this.api.get(`beers/${beerId}`);
  };

  getRandomBeer = () => {
    return this.api.get("beers/random");
  };

  saveBeer = (beerData) => {
    return this.api.post("beers/new", beerData);
  };
}

const beersService = new BeersService();

export default beersService;
