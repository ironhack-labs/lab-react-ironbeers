import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com/beers"
        })
    }

    getAllBeers = () => this.api.get('/')
    getOneBeer = beerId => this.api.get(`/${beerId}`)
    getRandomBeer = () => this.api.get('/random')
    newBeer = beerDetails => this.api.post('/new' , beerDetails)

}

export default BeersService