import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com' })
    }

    getAllBeers = () => {
        return this.api.get('/beers')
    }

    getOneCoaster = id => {
        return this.api.get(`/beers/${id}`)
    }
    getOneRandom = () => {
        return this.api.get('/beers/random')
    }
    createNewBeer = beerData => {
        return this.api.post('/beers/new', beerData)
    }

}

const beersService = new BeersService()

export default beersService