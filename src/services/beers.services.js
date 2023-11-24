import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getAllBeers() {
        return this.api.get('/')
    }

    getDetailsBeers(_id) {
        return this.api.get(`/${_id}`)
    }

    getRamdonBeers() {
        return this.api.get('/random')
    }
}

const beersService = new BeersService()

export default beersService