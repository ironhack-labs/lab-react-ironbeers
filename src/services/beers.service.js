import axios from 'axios'

class BeersService {
    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' })

    }
    getAllBeers = () => this.api.get(`/`)

    getBeer = id => this.api.get(`/${id}`)

    getRandomBeer = () => this.api.get(`/random`)

    postNewBeer = beer => this.api.post(`/new`, beer)

}
const beersService = new BeersService()

export default beersService