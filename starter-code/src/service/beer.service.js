import axios from "axios";

export default class Service {
                 constructor() {
                   this._service = axios.create({
                     baseURL: "https://ih-beers-api2.herokuapp.com/beers"
                   });
                 }

                 getAllBeer = () => this._service.get("/");
                 getOneBeer = id => this._service.get(`/${id}`);
                 getRandomBeer = () => this._service.get(`/random`);
               }