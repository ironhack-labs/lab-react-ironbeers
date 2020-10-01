import axios from 'axios'

export default class BeerService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com'
        })
    }

    getAllBeers = () => this.api.get('/beers')
    
}