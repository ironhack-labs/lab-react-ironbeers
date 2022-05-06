import axios from 'axios'

class BeersServices {

    constructor() {
        this.api = axios.create({ baseURL: 'http://localhost:5005/api/coasters' })
    }

    getAllBeers = () => {
        return this.api.get('/getAllBeers')
    }

}

const BeerService = new CoastersService()

export default coastersServices
