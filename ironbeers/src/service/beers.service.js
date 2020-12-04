import axios from 'axios'



export default class BeersService {
    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }


    getBeers = () => this.apiHandler.get('/')
    getOneBeer = beerId => this.apiHandler.get(`/${beerId}`)
    getRandomBeer = () => this.apiHandler.get('/random')
    newBeer = beerDetails => this.apiHandler.post ('/new', beerDetails)
    
}

