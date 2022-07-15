import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' })
    }

    getAllBeers = () => {
        return this.api.get('/')
    }

    getOneBeer = id => {
        return this.api.get(`/${id}`)
    }

    getRandomBeer = id => {
        return this.api.get(`/random`)
    }

}

const beersService = new BeersService()

export default beersService