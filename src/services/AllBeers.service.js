import axios from 'axios'

class BeerService {

    constructor() {

        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }


    getBeers() {
        return this.api.get('/')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    getRandomBeer() {
        return this.api.get('https://ih-beers-api2.herokuapp.com/beers/random')

    }

    saveNewBeer(beerData) {
        return this.api.post('https://ih-beers-api2.herokuapp.com/beers/new', beerData)
    }

}

const beerService = new BeerService()

export default beerService

