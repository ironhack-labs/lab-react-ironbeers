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

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    getOneRandomBeer() {
        return this.api.get(`/random`)
    }


    saveBeer(beerData) {
        return this.api.post('/new', beerData)
    }

    searchBeer(query) {
        return this.api.get(`/search?q=${query}`)
    }
}


export default new BeersService()