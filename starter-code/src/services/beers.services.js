import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "https://ih-beers-api2.herokuapp.com"
    });
  }

  getAllBeers = () =>
    this.service.get("/beers").then(response => response.data);
  getOneBeer = id =>
    this.service.get(`/beers/${id}`).then(response => response.data);
  getRandomBeer = () =>
    this.service.post(`/beers/random`).then(response => response.data);
  postBeer = beer =>
    this.service.post(`/beers/new`, beer).then(response => response.data);
}
