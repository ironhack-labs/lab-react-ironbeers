import axios from 'axios'

export default class BeerService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })        
        
    }

    getAllBeers = () => this.api.get('/')
    
    getOneBeer = id => this.api.get(`/:${id}`)

    getRandomBeer = () => this.api.get('/random')

    createBeer = () => this.api.post('/new')

    searchBeer = () => this.api.get(`/search?q={query}`)
    
}