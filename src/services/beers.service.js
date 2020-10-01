import axios from 'axios'

 class BeersService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.api.get('/')
    getOneBeer = id => this.api.get(`/${id}`)
    getRandomBeer = () => this.api.get('/')
    createNewBeer = beer => this.api.post(`/`, beer)

}
export default BeersService