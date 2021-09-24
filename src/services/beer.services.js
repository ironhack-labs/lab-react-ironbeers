import axios from "axios";

export default class BeerServices{
    constructor(){
        this.instance = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }
      getBeers = () => this.instance.get("/");
      getOneBeer = (id) => this.instance.get(`/${id}`);
      getRandomBeer = (id) => this.instance.get(`/${id}`);
      createBeer = (beer) => this.instance.post("/new", beer);
    
}
