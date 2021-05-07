import axios from 'axios'

class BeersService {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.app.get('/')
    getOneBeer = beer_id => this.app.get(`/getOneBeer/${beer_id}`)
    createBeer = beerDetails => this.app.post(`/newBeer`, beerDetails)
}

export default BeersService