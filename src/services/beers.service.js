import axios from "axios"

class BeerService {
    constructor() {
        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getBeers() {
        return this.api.get('/')
    }

    getRandomBeer() {
        return this.api.get(`/random`)
    }

    getSearchBeers(query) {
        return this.api.get(`/search?q=${query}`)
    }

    postBeer(newBeer) {
        return this.api.post(`/new`, newBeer)
    }

    getBeerDetails(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

}

const beerService = new BeerService()

export default beerService