import axios from "axios";

export default class Services {
                 constructor() {
                   this.service = axios.create({
                     baseURL: "https://ih-beers-api2.herokuapp.com/beers"
                   });
                 }

                 getAllBeers = () => this.service.get("/");
                 getOneBeer = id => this.service.get(`/${id}`);
                 postBeer = beer => this.service.post("/new", beer);
                 getRandomBeer = () => this.service.get("/random");
               }
