import axios from "axios";

class BeerService {
    constructor() {
        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getBeers() {
        return this.api.get('/')
    }

    getOneBeer(beerId) {
        return this.api.get(`/${beerId}`)
    }
    getRandombeer() {
        return this.api.get('/random')
    }

    newBeer(beerData) {
        return this.api.post('/new', beerData)
    }
}

const beerService = new BeerService()

export default beerService