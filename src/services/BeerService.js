import axios from 'axios'

export default class BeerService {
    constructor() {
        this.instance = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com/beers"
        })
    }
    getBeers = () => this.instance.get('/')
    getRandomBeer = () => this.instance.get('/random')
    getOneBeer = (id) => this.instance.get(`/${id}`)
    createBeer = (beer) => this.instance.post('/new', beer)
}
