
import axios from 'axios'

class BeerService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env}/Beers`
        })
    }


    getBeers() {
        return this.api.get('/getAllBeers')
    }

}

const beersService = new BeerService()

export default beersService