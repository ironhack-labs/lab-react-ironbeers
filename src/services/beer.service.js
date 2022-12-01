import axios from 'axios'

class BeerService {

    constructor() {

        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }


    getBeer() {
        return this.api.get('/')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    randomBeer() {
        return this.api.post('/random')
    }

    newBeer() {
        return this.api.post('/new')
    }

    newBeer() {
        return this.api.post(`/search?q={querry}`)
    }
}

const beerService = new BeerService()

export default beerService