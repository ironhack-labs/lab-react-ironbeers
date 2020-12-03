import axios from 'axios'

export default class BeerService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers = () => this.apiHandler.get('/')
    getOneBeer = beerId => this.apiHandler.get(`/${beerId}`)
    saveNewBeer = beerInfo => this.apiHandler.post(`/new`, beerInfo)
    getRandomBeer = () => this.apiHandler.get('/random')
    searchBeer = query => this.apiHandler.get(`/search?q=${query}`)
}