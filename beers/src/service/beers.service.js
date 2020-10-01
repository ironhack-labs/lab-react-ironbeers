import axios from 'axios'

export default class beersService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.api.get('/')
    getOneBeer = id => this.api.get(`/${id}`)
    getRandomBeer = id => this.api.get(`/random`)
    newBeer = beer => this.api.post('/new', beer)
    // searchBeer = () => this.api.get(`/search/$q=`, )
}