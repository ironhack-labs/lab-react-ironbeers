import axios from "axios";

export default class BeerService {
    constructor(){
        let service = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com/beers"
        })

        this.service = service;
    }

    getAllBeers(){
        return this.service.get("/").then((resp) => resp.data);
    }

    getBeer(id){
        return this.service.get(`/${id}`).then((resp) => resp.data);
    }

    getRandomBeer(){
        return this.service.get("/random").then((resp) => resp.data);
    }
}