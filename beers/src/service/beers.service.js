import axios from 'axios'


export default class BeersService {
    
    constructor(){
        this.api = axios.create({baseURL: 'https://ih-beers-api2.herokuapp.com/beers'})
    }

    getAllBeers = () => this.api.get('/')
    getRandomBeer = () => this.api.get('/random')
    getSearchBeer = query => this.api.get('/search?q=',query)
    createNewBeer = (beer) => this.api.post('/new',beer) 

}
