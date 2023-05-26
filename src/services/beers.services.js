import axios from "axios";

class BeersService {
    constructor() {
        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getBeers() {
        return this.api.get('/')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }
    getRandomBeer() {
        return this.api.get(`/random`)
    }
}

const beersService = new BeersService()

export default beersService