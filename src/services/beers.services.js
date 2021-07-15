import axios from 'axios'

class BeersService {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com'
        })
    }

    getAllBeers = () => this.app.get('/beers')
    // getOneBeer = beer_id => this.app.get(`/beerdetails/${beer_id}`)
}

export default BeersService