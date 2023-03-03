import axios from "axios"

class BeersService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com'
        })
    }

    getBeers() {
        return this.api.get('/beers')
    }

    getOneBeer(beer_id) {
        return this.api.get(`beers/${beer_id}`)
    }
}

const beersService = new BeersService()

export default beersService