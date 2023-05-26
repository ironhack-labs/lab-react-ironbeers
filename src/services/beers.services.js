
import axios from 'axios'

class BeersService {

    constructor() {

        this.api = axios.create({
            baseURL: `${'https://ih-beers-api2.herokuapp.com'}`
        })
    }

    getBeers() {
        return this.api.get('/beers')
    }
    getOneBeers(id) {
        return this.api.get(`/beers/${id}`)
    }
    getRandomBeer() {
        return this.api.get(`/beers/random`)
    }
    saveBeer(beer) {
        return this.api.post(`/beers/new`, beer)
    }

}
const beersService = new BeersService()

export default beersService
