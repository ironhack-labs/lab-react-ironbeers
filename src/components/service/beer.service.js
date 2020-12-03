import axios from 'axios'

export default class BeerService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeer = () => this.apiHandler.get('/')
    getBeerId = beerId => this.apiHandler.get(`/${beerId}`)
    getRandomBeer = () => this.apiHandler.get('/random')
    postNewBeer = beerInfo => this.apiHandler.post(`/new`, beerInfo)
}