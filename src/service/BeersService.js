import Axios from 'axios'

export default class BeersService {
    constructor() {
        this.service = Axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }
    getAllBeers = () => this.service.get('/')
    getOneBeer = _id => this.service.get(`/${_id}`)
    getRandomBeer = () => this.service.get('/random')
    createBeer = beer => this.service.post('/new', beer)
}