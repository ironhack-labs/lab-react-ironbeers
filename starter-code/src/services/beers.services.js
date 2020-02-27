import axios from 'axios'

export default class BeerServices {

    constructor() {
        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/'
        })
    }

    getAllBeers = () => this.service.get('/beers').then(response => response.data)
    getBeerDetails = id => this.service.get(`/beers/${id}`).then(response => response.data)
    getRandomBeer = () => this.service.get(`/beers/random`).then(response => response.data)



}