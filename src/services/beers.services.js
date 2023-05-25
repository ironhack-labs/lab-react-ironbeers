import axios from 'axios'

class BeerService {

    constructor() {

        this.api = axios.create({
            baseURL: `${'https://ih-beers-api2.herokuapp.com'}`
        })
    }

    getBeers() {
        return this.api.get('/beers')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/beers/${beer_id}`)
    }

    getBeerRandom() {
        return this.api.get(`/beers/random`)
    }

}

const beerService = new BeerService()

export default beerService