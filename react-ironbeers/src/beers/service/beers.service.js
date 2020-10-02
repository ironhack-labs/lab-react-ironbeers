import axios from 'axios'

export default class beersService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com'
        })
    }

    getAllBeers = () => this.api.get('/beers')
    getBeerId = beerId => this.api.get(`/beers/${beerId}`)

}