import axios from 'axios'

class BeerService {

    constructor() {

        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers() {
        return this.api.get('/')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    getRandomBeer() {
        return this.api.get('/random')
    }

    newBeer(beer) {
        return this.api.post('/new', beer)
    }
}

const beerService = new BeerService()

export default beerService