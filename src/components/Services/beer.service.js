
import axios from 'axios'

class BeerService {

    constructor() {

        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com' })
    }

    getAllBeers = () => {
        return this.api.get('/beers')
    }

    getRandomBeer = id => {
        return this.api.get(`/random-beer`)
    }

    saveBeer = beer => {
        return this.api.post(`/new-beer`, beer)
    }
}

const beerService = new BeerService()

export default beerService