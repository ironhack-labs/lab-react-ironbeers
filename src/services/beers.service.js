import axios from 'axios'



class BeersService {
    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com' })
    }

    getAllBeers = () => {
        return this.api.get('/beers')
    }
}

export default BeersService