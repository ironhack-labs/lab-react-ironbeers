import axios from 'axios'

export default class BeerService {

    constructor() {

        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com'
        })
    }

    getAllBeers = () => this.service.get('/beers')
    getRandomBeer = id => this.service.get('/beers/random')
    getOneBeer = id => this.service.get(`/beers/${id}`)



}