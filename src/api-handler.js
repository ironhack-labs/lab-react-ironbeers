import axios from 'axios'

class beerApiHandler {
    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.apiHandler.get('/')
    getOneBeer = beerId => this.apiHandler.get(`/${beerId}`)
    getRandomBeer = () => this.apiHandler.get('/random')
    createBeer = beerInfo => this.apiHandler.post('new', beerInfo)
    searchBeer = query => this.apiHandler.get(`/search?q=${query}`)
}

export default beerApiHandler