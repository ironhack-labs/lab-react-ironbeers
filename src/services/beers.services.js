import axios from 'axios'

class BeerServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`
        })
    }


    getAllBeers() {
        return this.api.get('/')
    }

    getRandomBeer() {
        return this.api.get(`/random`)
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    saveBeer(beedData) {
        return this.api.post(`/new`, beedData)
    }

    searchBeers(query) {
        return this.api.get(`/search?q=${query}`)
    }
}

const BeersServices = new BeerServices()

export default BeersServices