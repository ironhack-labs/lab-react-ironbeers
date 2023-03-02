import axios from 'axios'

class BeerService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers() {
        return this.api.get('/')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    getRandomBeer() {
        return this.api.get(`/random`)
    }

    newBeer(beerData) {
        return this.api.post('/new', beerData)
    }

    searchBeer(query) {
        return this.api.get(`/search?=q${query}`)
    }

}

const beerService = new BeerService()

export default beerService