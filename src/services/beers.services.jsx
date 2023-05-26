import axios from 'axios'

class BeerService {

    constructor() {

        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/`
        })
    }


    getBeers() {
        return this.api.get('/beers')
    }

    getOneBeer(_id) {
        return this.api.get(`/beers/${_id}`)
    }
    getRandomBeer() {
        return this.api.get('/beers/random')
    }

    saveBeer(beerData) {
        return this.api.post('/new', beerData)
    }
}

const beersService = new BeerService()

export default beersService