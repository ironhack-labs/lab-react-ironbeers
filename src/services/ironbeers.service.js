import axios from 'axios'

class IronbeersService {
    constructor() {
        this.axios = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com' })
    }

    getAllBeers = () => {
        return this.axios.get('/beers')
    }

    getSingleBeer = (id) => {
        return this.axios.get(`/beers/${id}`)
    }

    getRandomBeer = () => {
        return this.axios.get('/beers/random')
    }

    postNewBeer = (beer) => {
        return this.axios.post('/beers/new', beer)
    }
}

const ironbeersService = new IronbeersService()
export default ironbeersService