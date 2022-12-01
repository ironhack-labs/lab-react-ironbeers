import axios from 'axios'

class BeerService {

    constructor() {

        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }


    getBeers() {
        return this.api.get('/getAllBeers')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/getOneBeer/${beer_id}`)
    }

    saveBeer(beerData) {
        return this.api.post('/saveBeer', beerData)
    }
}

const beerService = new BeerService()

export default beerService