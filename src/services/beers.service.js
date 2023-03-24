import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers() {
        return this.api.get('/')
    }

    // getBeerById() {
    //     return this.api.get(`/${id}`)
    // }

    // createNewBeer() {
    //     return this.api.post('/new', data)
    // }
}

const beersService = new BeersService()

export default beersService