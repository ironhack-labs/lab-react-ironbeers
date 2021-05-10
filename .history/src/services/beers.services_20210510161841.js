import axios from 'axios';

export default class BeerService{
  constructor(){
    this.instance = axios.create({
      baseURL: `https://ih-beers-api2.herokuapp.com/beers`
    })
  }

  create = data => this.instance.post("/new-beer", data);
  getAll = () => this.instance.get("/");
  getOne = id => this.instance.get(`/${id}`);
  getRandom = () => this.instance.get(`/random-beer`)
}