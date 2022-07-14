import axios from 'axios'

class BeerService {

    constructor() {

        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getBeers() {
        return this.api.get('/')
    }
}

const beersService = new BeerService()

export default beersService