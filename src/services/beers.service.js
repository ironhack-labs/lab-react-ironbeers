import axios from 'axios'

class BeerService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers() {
        return this.api.get('')
    }

    getOneBeers(beer_id) {
        return this.api.get(`${beer_id}`)
    }

    getRandomBeer() {
        return this.api.get('random')
    }
}
const beerService = new BeerService()

export default beerService