import axios from 'axios'

export default class Services {
    constructor() {
        this.service = axios.create({ baseURL: "https://ih-beers-api2.herokuapp.com/beers" })
    }

    getAllBeers = () => this.service.get('/').then(response => response.data)
    getOneBeer = id => this.service.get('/' + id).then(response => response.data)
    getRandomBeer = () => this.service.get('/random').then(response => response.data)
    createNewBeer = beer => this.service.post('/new', beer).then(response => response.data)
    searchBeer = query => this.service.get('/search?q=' + query).then(response => response.data)
}