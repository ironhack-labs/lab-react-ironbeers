import axios from 'axios'

class BeersService {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers = () => this.app.get('/')
    getOneBeer = beer_id => this.app.get(`/${beer_id}`)
    getRandomBeer = () => this.app.get('/random')
    newBeer = beer_info => this.app.post('/new', beer_info)
    serachBeer = query => this.app.get(`/search?q=${query}`, query)
}

export default BeersService