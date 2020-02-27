import axios from 'axios'

export default class BeerServices {

    constructor() {
        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/'
        })
    }

    getAllBeers = () => this.service.get('/beers').then(response => response.data)

}