import axios from 'axios'

class BeersService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/beers`
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

const beersService = new BeersService()

export default beersService;