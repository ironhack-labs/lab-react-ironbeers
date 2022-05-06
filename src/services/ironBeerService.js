import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/' })
    }

    getBeers = () => {
        return this.api.get('/beers')
    }

    getOneBeer = id => {
        return this.api.get(`/${id}`)
    }

    newBeer = beer => {
        return this.api.post(`/new`, beer)
    }
}

const beersService = new BeersService()

export default beersService