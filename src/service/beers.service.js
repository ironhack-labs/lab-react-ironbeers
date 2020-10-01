import axios from 'axios'

export default class AllbeersService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    
    getAllBeers = () => this.api.get('/')
    
}
