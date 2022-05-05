import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' })
    }

    getAllBeers = () => {
        return this.api.get('/beers')
    }

    getRandomBeer = id => {
        return this.api.get(`/random-beer/${id}`)
    }

    getNewBeer = coaster => {
        return this.api.post(`/new-beer`, coaster)
    }
}

const BeersService = new BeersService()

export default BeersService