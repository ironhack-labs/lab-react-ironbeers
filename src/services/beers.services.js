import axios from 'axios'

class BeerService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`
        })
    }


    getBeers() {
        return this.api.get('/')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    getOneRandom() {
        return this.api.get(`/random`)
    }
}

const beersService = new BeerService()

export default beersService