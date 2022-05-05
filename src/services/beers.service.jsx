import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' })
    }

    getAllCoasters = () => {
        return this.api.get('/getAllBeers')
    }

    getOneCoaster = id => {
        return this.api.get(`/getOneBeers/${id}`)
    }

    saveCoaster = coaster => {
        return this.api.post(`/saveBeer`, coaster)
    }
}

const beersService = new BeersService()

export default BeersService
