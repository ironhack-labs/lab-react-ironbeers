import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: "https://ih-beers-api2.herokuapp.com/beers"
    });
  }

  getAllBeers = () => this._service.get("/");
  getOneBeer = id => this._service.get(`/${id}`);
  getRandomBeer = () => this._service.get(`/random`);
  postBeer = beer => this._service.post("/new", beer);
}
