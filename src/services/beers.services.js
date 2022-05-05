import axios from 'axios'

class IronBeers {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' })
    }

    getAllBeers = () => {
        return this.api.get('/')
    }

    getOneBeer = id => {
        return this.api.get(`/beers/${id}`)
    }

    getRandomBeer = beer => {
        return this.api.get('/random', beer)
    }

    addNewBeer = beer => {
        return this.api.post('/new', beer)
    }

    searchBeer = beers => {
        return this.api.get(`/search?q={query}/${beers}`)
    }

}

const ironBeers = new IronBeers()

export default ironBeers