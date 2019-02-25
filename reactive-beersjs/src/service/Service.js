import axios from "axios";

export default class Service {
  constructor() {
    this.service = axios.create({
      baseURL: "https://ironbeer-api.herokuapp.com/beers"
    });
    this.state = { singleBeer: null };
  }
  getBeers = () => {
    return this.service.get("/all").then(data => data.data);
  };

  addBeer = beer => {
    console.log(beer);
    return this.service
      .post("/new", beer)
      .then(newBeers => newBeers)
      .catch(err => console.log(err));
  };
}
