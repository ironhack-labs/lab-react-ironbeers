import axios from 'axios'

export default class CoasterService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/'
        })
    }

    getAllBeers = () => this.api.get('/beers')
    getOneBeer = id => this.api.get(`/beers/${id}`)
    getRandomBeer = () => this.api.get(`/beers/random`)

}