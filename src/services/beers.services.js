import axios from 'axios'

class BeersService {

    constructor() {

        this.api = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com/beers"
        })
    }
    getBeers() {
        return this.api.get('/')
    }
    getOneBeer(_id) {
        return this.api.get(`/${_id}`)
    }
}

const beersService = new BeersService()

export default beersService

