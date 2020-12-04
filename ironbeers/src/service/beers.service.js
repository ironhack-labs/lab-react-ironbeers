import axios from 'axios'

class BeerService {
    constructor() {

        this.apiHandler = axios.create({

            baseURL: 'https://ih-beers-api2.herokuapp.com'

        })
    }


    getAllBeers = () => this.apiHandler.get('/beers')
    getBeerById = beerId => this.apiHandler.get(`/beers/${beerId}`)
    getRandomBeer = () => this.apiHandler.get('/beers/random')
    createNew = newBeer => this.apiHandler.post('/beers/new', newBeer)
    searchBeers = query => this.apiHandler.get(`/beers/search?q=${query}`)

}

export default BeerService