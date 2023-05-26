import axios from 'axios'

class BeerApiService {

    constructor() {

        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers() {
        return this.api.get('/')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    getRandomBeer() {
        return this.api.get('/random')
    }

    saveBeer(beerData) {
        return this.api.post('/new', beerData)
    }

    searchBeers(query) {
        return this.api.get(`search?q=${query}`)
    }

}

const beerApiService = new BeerApiService()

export default beerApiService