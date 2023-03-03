import axios from "axios";

class BeersServices {

    constructor() {

        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers() {
        return this.api.get('/beers')
    }

    getDetailsBeer(_id) {
        return this.api.get(`/beers/${_id}`)
    }

    getRandomBeer() {
        return this.api.get('/random-beer')
    }
}

const beersServices = new BeersServices()

export default beersServices