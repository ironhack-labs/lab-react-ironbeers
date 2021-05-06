import axios from 'axios'

class BeersService {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.app.get('/')
    getOneBeer = _id => this.app.get(`/${_id}`)
    getRandomBeer = _id => this.app.get(`/random`)
    createBeer = beerDetails => this.app.post(`/new`, beerDetails)
    searchBeer = query => this.app.get(`/search?q=${query}`)
}

export default BeersService