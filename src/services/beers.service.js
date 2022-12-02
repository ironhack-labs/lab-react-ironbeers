import axios from 'axios'

class BeersService {

    constructor() {

        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }
    getBeers() {
        return this.api.get('/')
    }

    getOneBeer(beer_id) {

        return this.api.get(`/${beer_id}`)
    }

    getRandomBeer() {
        return this.api.get('/random')
    }

    createNewBeer() {
        return this.api.post('/new')
    }

    // searchBeer() {
    //     return this.api.get(`/search?q=${query}`)
    // }

}

const beersService = new BeersService()

export default beersService