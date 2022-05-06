import axios from 'axios'

class ironbeersServiceCons {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' })
    }

    getAllBeers = () => {
        return this.api.get('/')
    }

    getOneBeer = id => {
        return this.api.get(`/${id}`)
    }

    getRandomBeer = () => {
        return this.api.get(`/random`)
    }

    createNewBeer = beer => {
        return this.api.post('/new', beer)
    }
}

const ironbeersService = new ironbeersServiceCons()

export default ironbeersService