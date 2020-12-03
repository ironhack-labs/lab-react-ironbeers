import axios from 'axios'

export default class beersService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers = () => this.apiHandler.get('/')
    getOneBeer = beerId => this.apiHandler.get(`/${beerId}`)
    getRandom = () => this.apiHandler.get('/random')
    newBeer = beerInfo => this.apiHandler.post('/new', beerInfo)
    // saveCoaster = coasterInfo => this.apiHandler.post(`/newCoaster/`, coasterInfo)
}