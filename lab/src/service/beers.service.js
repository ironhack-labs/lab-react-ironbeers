import axios from 'axios'

export default class beerService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.apiHandler.get('/')
    getOneBeer = beerId => this.apiHandler.get(`/:${beerId}`)
    getRandomBeer = () => this.apiHandler.get('/random-beer')
    createBeer = () => this.apiHandler.post('/new-beer')
    searchBeer = () => this.apiHandler.get(`/search?q={query}`)
}