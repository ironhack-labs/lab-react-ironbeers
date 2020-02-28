import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com'
        })
    }

    getAllBeers = () => this.service.get('/beers').then(response => response.data)
    getRandomBeer = () => this.service.get('/random').then(response => response.data)
    getBeerDetails = id => this.service.get(`/beers/${id}`).then(response => response.data)
    postBeer = beer => this.service.post(`/new`, beer).then(response => response.data)
    especificBeer = () => this.service.get(`/search?q=`).then(response => response.data)
}