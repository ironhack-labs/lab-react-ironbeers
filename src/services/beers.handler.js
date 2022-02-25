import axios from 'axios'

class BeerHandler {
    constructor() {
        this.axios = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com' })
    }

    getBeers = () => {
        return this.axios.get('/beers')
    }

    getOneBeer = (id) => {
        return this.axios.get(`/beers/${id}`)
    }

    getRandomBeer = () => {
        return this.axios.get('/beers/random')
    }

    postNewBeer = (beer) => {
        return this.axios.post('/beers/new', beer)
    }
}

const beerHandler = new BeerHandler()

export default beerHandler