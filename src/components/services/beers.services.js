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

    getBeerDetails(beers_id) {
        return this.api.get(`/${beers_id}`)
    }

    getRandomBeer(beerData) {
        return this.api.post('/random', beerData)
    }
}

const beersService = new BeersService()

export default beersService