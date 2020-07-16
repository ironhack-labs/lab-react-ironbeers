import axios from 'axios'

export default class ironBeersService {

    constructor() {
        
        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.service.get('/beers')      
    getRandomBeer = id => this.service.get('/random')
    
    getOneBeer = id => this.service.get(`/beers/${id}`)
    
    createBeer = beer => this.service.post(`/newBeer`, beer) 

}