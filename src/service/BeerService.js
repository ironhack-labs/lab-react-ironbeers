import axios from 'axios'

export default class BeerService {

    constructor() {

        this.service = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com/beers"
        })
    }

    getAllBeers = () => this.service.get(`/`)
 
}