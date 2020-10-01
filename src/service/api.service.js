import axios from 'axios'

export default class ApiService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.api.get('/')
    getOneBeer = id => this.api.get(`/getOneBeer/${id}`)
    getRandomBeer = () => this.api.get('/random')
    searchBeer = query => this.api.get(`/search?q=${query}`)
    newBeer = beer => this.api.post('/newBeer', beer)
    
}