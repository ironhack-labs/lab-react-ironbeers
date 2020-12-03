import axios from 'axios'

export default class beerService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeer = () => this.apiHandler.get('/')
    getOneBeer = beerID => this.apiHandler.get(`/${beerID}`)
    getRandomBeer = () => this.apiHandler.get('/random')
    newBeer = beerInfo => this.apiHandler.post(`/new/`, beerInfo)
}