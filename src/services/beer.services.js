import axios from 'axios'

class BeerService {

    constructor() {

        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getAllBeers() {
        return this.api.get('/')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    getOneRandom() {
        return this.api.get(`/random`)
    }
}

const beerService = new BeerService()

export default beerService