import axios from 'axios'

export default class BeersService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers = () => this.apiHandler.get('/')
    getOneBeer = beersId => this.apiHandler.get(`/${beersId}`)
    getRandomBeer = () => this.apiHandler.get('/random')
    newBeer = beerInfo => this.apiHandler.post('/new', beerInfo)
}