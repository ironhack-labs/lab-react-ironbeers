import axios from "axios";

export default class BeersService {
  baseUrl = "https://ih-beers-api2.herokuapp.com";
  beers = axios.create({
    baseURL: this.baseUrl  
  });

  getBeers() {
    return this.beers.get("/beers");
  }

  getRandomBeer() {
    return this.beers.get("/beers/random");
  }
  createBeers(beersData) {
    return this.beers.post("/beers/new", beersData);
  }
}