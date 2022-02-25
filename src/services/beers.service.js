import axios from "axios";

class BeerService {
  constructor() {
    this.api = axios.create({
      baseURL: "https://ih-beers-api2.herokuapp.com/beers",
    });
  }

  getAllBeers = () => {
    return this.api.get("/");
  };

  getOneBeers = (id) => {
    return this.api.get(`/${id}`);
  };

  getRandom = () => {
    return this.api.get("/random");
  };

  createNewBeer = (data) => {
    return this.api.post("/new", data);
  };

  searchBeer = (query) => {
    return this.api.get(`/search?q=${query}`);
  };
}

const beerService = new BeerService();

export default beerService;
