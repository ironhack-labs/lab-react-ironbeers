import axios from 'axios'

export default class beerService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers = () => this.apiHandler.get('/')
    saveNewBeer = beerInfo => this.apiHandler.post(`/NewBeer`, beerInfo)
    
}