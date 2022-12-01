import axios from 'axios'

class BeersService {

    constructor() {

        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers() {
        return this.api.get('/')
    }

    getRandomBeer() {
        return this.api.get('/random')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    saveBeer(beerData) {
        return this.api.post('/new', beerData)
    }
}

const beersService = new BeersService()

export default beersService