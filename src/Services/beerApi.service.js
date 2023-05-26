import axios from 'axios'

class BeerApiService {

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

    saveBeer(beerData) {
        return this.api.post('/new', beerData)
    }
}

const beerApiService = new BeerApiService()

export default beerApiService