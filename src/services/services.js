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
        return this.api.get('/random')
    }

    getSearchedBeer(query) {
        return this.api.get(`/search?q=${query}`)
    }

    saveBeer(beerData) {
        return this.api.post('/new', beerData)
    }
}

const beerService = new BeerService()

export default beerService