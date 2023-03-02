import axios from 'axios'

class BeersService {

    static _instace
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`
        })
    }

    static getInstance() {
        if (!this._instance) {
            this._instance = new BeersService();
        }
        return this._instance;
    }

    getBeers() {
        return this.api.get('/beers')
    }

    getOneBeer(coaster_id) {
        return this.api.get(`/beers/${coaster_id}`)
    }

    getRandomBeer() {
        return this.api.get('/beers/random')
    }

    searchBeer(query) {
        return this.api.get(`/beers/search?q=${query}`)
    }

    createBeer(beerData) {
        return this.api.post('/beers/new', beerData)
    }
}

export default BeersService.getInstance()