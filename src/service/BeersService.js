import axios from 'axios'

export default class BeersService {

    constructor() {
        this.service = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com/beers"
        })
    }

    getAllBeers = () => { 
        return this.service.get(`/`)
    }
    
    // getOneBeer = id => this.service.get(`/getOneBeer/${id}`)
    // createBeer = beer => this.service.post(`/newBeer`, beer)
}