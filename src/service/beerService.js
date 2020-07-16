import axios from 'axios'

export default class BeerService {

    constructor() {

        this.service = axios.get('https: //ih-beers-api2.herokuapp.com/beers')
        
    }

    getAllBeers = () => this.service.get('/beers')
    getOneBeer = id => this.service.get(`/random-beer/${id}`)
    createBeer = coaster => this.service.post(`/new-beer`, coaster)
}