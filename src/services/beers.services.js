import axios from 'axios'

class BeersService {

    constructor() {

        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }


    getAllBeers() {
        return this.api.get('/')
    }

    getOneBeer(_id){
        return  this.api.get(`/${_id}`)
    }

    getRandomBeer() {
        return this.api.get(`/random`)
    }

    saveBeer() {
        return this.api.post('/new', )
    }
}

const beersService = new BeersService()

export default beersService