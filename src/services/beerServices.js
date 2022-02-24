import axios from 'axios'

class BeerService {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' })
    }

    getAllBeers = () => {
        return this.api.get('/')
    }

    getOneBeer = id => {
        return this.api.get(`/${id}`)
    }

    getOneRandomBeer = () => {
        return this.api.get(`/random`)
    }

    newBeer = beer => {
        return this.api.post(`/new`, beer)
    }

    searchOneBeer = query => {
        return this.api.get(`/search?q=${query}`)
    }
}

const beerService = new BeerService()

export default beerService