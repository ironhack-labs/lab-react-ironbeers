import axios from "axios"


class BeersService {

    constructor() {
        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getAllBeers() {
        return this.api.get('/')
    }

    getBeers(_id) {
        return this.api.get(`/${_id}`)
    }
    getRandomBeers() {
        return this.api.get(`/random`)
    }
    getNewBeers(newBeer) {
        return this.api.post(`/new`, newBeer)
    }



}


const beersService = new BeersService()
export default beersService