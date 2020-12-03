import axios from 'axios'

export default class Service {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeerList = () => this.apiHandler.get('/')
    getRandomBeer = () => this.apiHandler.get(`/random`)
    saveBeer = beerInfo => this.apiHandler.post(`/new`, beerInfo)
    getBeer = beer_id => this.apiHandler.get(`/${beer_id}`)

}