import axios from 'axios';

export default class beerService {
    constructor() {
        this.service = axios.create({
          baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
        });
    }

    getAllBeers = () => this.service.get('/')
    getRandomBeer = () => this.service.get('/random')
    getOneBeer = id => this.service.get(`/${id}`)
    createBeer = beer => this.service.post(`/new`, beer)
}