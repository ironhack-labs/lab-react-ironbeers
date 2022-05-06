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

    getRandomBeer = randomBeer => {
        return this.api.get(`/random`, randomBeer)
    }

    saveNewBeer = newBeer => {
        return this.api.post(`/new`, newBeer)
    }

    getFilterdBeer = filteredBeer =>{
        return this.api.get(`/search?q=${filteredBeer}`)
    }
}

const beersService = new BeersService()

export default beersService