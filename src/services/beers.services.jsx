import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getBeers() {
        return this.api.get('/')
    }

    getBeersDetails(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    saveBeers(beerData) {
        return this.api.post(`/saveBeer`, beerData)
    }
}

const beersService = new BeersService()

export default beersService