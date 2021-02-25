import axios from 'axios'

class BeersService {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL
        })
    }

    getBeers = () => this.api.get('/')
    getOneBeer = beerId => this.api.get(`/${beerId}`)
    getRandomBeer = () => this.api.get(`/random`)
    createBeer = beerInfo => this.api.post(`/new`, beerInfo)
    searchBeers = query => this.api.get(`/search?q=${query}`)
}

export default BeersService