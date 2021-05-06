import axios from 'axios'

class BeersService {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.app.get('/')
    getOneBeer = beer_id => this.app.get(`/${beer_id}`)
    createBeer = beerDetails => this.app.post(`/new`, beerDetails)
    getRandomBeer = () => this.app.get('/random')
}

export default BeersService