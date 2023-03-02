import axios from "axios"

class BeersService {
    constructor() {
        this.api = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com/beers"
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

    createOneBeer(beerData) {
        return this.api.post('/new', beerData)
    }

    filterBeers(query) {
        return this.api.get(`/search?q=${query}`)
    }
}

const beersService = new BeersService()

export default beersService