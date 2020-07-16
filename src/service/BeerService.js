
import axios from 'axios'

export default class BeerService {

    constructor() {

        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.service.get('/')
    getRandomBeer = () => this.service.get('/random')
    newBeer = beer => this.service.post(`/new-beer`, beer)
    oneBeer = id => this.service.get(`/${id}`)
}