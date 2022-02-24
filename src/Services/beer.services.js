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

    getRandomBeer = () => {
        return this.api.get(`/random`)
    }

    createNewBeer = (values) => {
        return this.api.post(`/new`, values)
    }

    getByQuery = (query) => {
        return this.api.get(`/search?q=${query}`)
    }

}

const beersService = new BeersService()

export default beersService