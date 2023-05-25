import axios from 'axios'

class BeerService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }


    getAllBeers() {
        return this.api.get('/')
    }


}

const beerService = new BeerService()

export default beerService