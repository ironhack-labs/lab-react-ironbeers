import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.service.get('/').then(response => response.data)
    getRandomBeer = () => this.service.get(`/random`).then(response => response.data)
    getBeer = _id => this.service.get(`/${_id}`).then(response => response.data)

}