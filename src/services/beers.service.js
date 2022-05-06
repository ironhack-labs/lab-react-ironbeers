import axios from 'axios'

class BeerService {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/' })
    }

    getAllBeers = () => {
        return this.api.get('/beers')
    }

    getOneBeer = id => {
        return this.api.get(`/beers/${id}`)
    }
    getRandomBeer = ( )=> {
        return this.api.get(`/beers/random`)
    }

    newBeer = beer => {
        return this.api.post(`/beers/new`, beer)
    }
}

const beerService = new BeerService()

export default beerService