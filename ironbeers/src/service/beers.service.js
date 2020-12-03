import axios from 'axios'

export default class BeersService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.apiHandler.get('/')
    getBeerById = id => this.service.get(`/${id}`)
    // saveCoaster = coasterInfo => this.apiHandler.post(`/newCoaster/`, coasterInfo)
}