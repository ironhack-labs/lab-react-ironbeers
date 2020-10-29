import axios from 'axios'   

export default class BeerService {

     constructor() {
         this.api = axios.create({
             baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
         })
    }

    getAllBeers = () => this.api.get('/')
    getBeerById = id => this.api.get(`/${id}`)
    getRandomBeer = () => this.api.get('/random')
    createNewBeer = (beer) => this.api.post('/new', beer)
}
        