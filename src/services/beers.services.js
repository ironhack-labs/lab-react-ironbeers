
import axios from "axios";

class BeerService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }


    getBeers() {
        return this.api.get('/')
    }

    getOneBeer(_id) {
        return this.api.get(`/${_id}`)
    }

    saveBeer(beerData) {
        return this.api.post('/new-beer', beerData)
    }

}

const beersService = new BeerService()

export default beersService
