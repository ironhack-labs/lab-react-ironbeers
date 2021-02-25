import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.api.get('/')
    getSingleBeer = beerId => this.api.get(`/${beerId}`)
    getRandomBeer = beerId => this.api.get('/random')
    newBeer = beerInfo => this.api.post('/new', beerInfo)
    searchBeer = beerId => this.api.get(`/search?q=${beerId}`)

}

export default BeersService