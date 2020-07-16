import axios from 'axios'

export default class BeerService {

    constructor() {

        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.service.get('/')
    getBeerById = id => this.service.get(`/${id}`)
    getRandomBeer = () => this.service.get('/random')
    createBeer = beer => this.service.post('/new', beer)
    getFilteredBeers = query => this.service.get(`/search?q=${query}`)
}