import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com'
        })
    }
    getAllBeers = () => this.service.get('/beers').then(response => response.data)
    getSingleBeer = id => this.get(`/beers/${id}`).then(response => response.data)
    randomBeer = () => this.get('/beers/random').then(response => response.data)

}