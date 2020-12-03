import axios from 'axios'

export default class beerService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers = () => this.apiHandler.get('/')
    getBeer = beerId => this.apiHandler.get(`/${beerId}`)
    getBeerRandom = () => this.apiHandler.get('/random')
    saveBeer = beerInfo => this.apiHandler.post('/new', beerInfo)
}