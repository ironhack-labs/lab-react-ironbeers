import axios from 'axios'

export default class BeerServices {

    constructor() {

        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers = () => this.service.get('/')

}
