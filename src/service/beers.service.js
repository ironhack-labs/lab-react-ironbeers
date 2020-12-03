import axios from 'axios'

export default class beersService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com'
        })
    }

    getBeers = () => this.apiHandler.get('/beers')
    getBeerDetails = beerId => this.apiHandler.get(`/beers/${beerId}`)
    getRandomBeer = () => this.apiHandler.get(`/beers/random`)
    addNew = beerInfo => this.apiHandler.post(`/beers/new`, beerInfo)

}

