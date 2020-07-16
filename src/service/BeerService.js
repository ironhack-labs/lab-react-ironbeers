
import axios from 'axios'

export default class BeerService {

    constructor() {

        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com'
        })
    }

    getAllBeers = () => this.service.get('/beers')
    getRandomBeer = () => this.service.get('/beers/random')
    newBeer = beer => this.service.post(`/beers/new`, beer)
    oneBeer = id => this.service.get(`/beers/${id}`)
}