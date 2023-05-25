import axios from 'axios'

class BeerService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com'
        })
    }

    getBeers() {
        return this.api.get('/beers')
    }

    saveBeer(newBeer) {
        return this.api.post('/beers/new', newBeer)
    }

    getRandomBeer() {
        return this.api.get('/beers/random')
    }

}

const beerService = new BeerService()

export default beerService