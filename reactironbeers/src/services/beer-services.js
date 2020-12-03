import axios from 'axios'

export default class beersService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers = () => this.apiHandler.get('/')
    getOneBeer = beerId => this.apiHandler.get(`${beerId}`)
    saveNewBeer = beerInfo => this.apiHandler.post(`/new-beer`, beerInfo)
    getRandomBeer = () => this.apiHandler.post(`/random-beer`)
}