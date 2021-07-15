
import axios from 'axios'

class BeerService {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com'
        })
    }

    getBeers = () => this.app.get('/beers')
    getNewBeer = beer_info => this.app.get(`/new`,beer_info)
    getRandomBeer = () => this.app.get('/random')
    getSelectedBeer = beer_id => this.app.get(`/beers/${beer_id}`)
}

export default BeerService