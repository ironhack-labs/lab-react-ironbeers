import axios from 'axios'

class BeersServices {
    constructor() {
        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }
    postNewBeer = (beer) => this.service.post('/new', beer)
    getAllBeers = () => this.service.get('/')
    getBeerDetail = (id) => this.service.get(`/${id}`)
    getRandomBeer = () => this.service.get('/random')
   

}

export default BeersServices