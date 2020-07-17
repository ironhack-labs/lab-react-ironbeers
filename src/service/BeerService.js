import axios from 'axios'

 class BeerService {

    constructor() {

        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.service.get('/')
    getOneBeer = id => this.service.get(`/${id}`)

}

export default BeerService