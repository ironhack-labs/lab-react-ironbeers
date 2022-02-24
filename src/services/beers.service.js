import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' })
    }

    getAllBeers = () => {
        return this.api.get('/')
    }

    getBeerbyId = (beerId) => {
        return this.api.get(`/${beerId}`)
    }



}

const beersService = new BeersService()

export default beersService