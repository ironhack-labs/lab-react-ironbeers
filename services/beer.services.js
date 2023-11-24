import axios from "axios"

class BeerService {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers() {
        return this.axiosApp.get('/')
    }
    getOneBeer(id) {
        return this.axiosApp.get(`/${id}`)
    }
    getRandomBeer() {
        return this.axiosApp.get('/random')
    }
    postNewBeer(data) {
        return this.axiosApp.post(`/new`,data)
    }
    getBeerBySearch(query) {
        return this.axiosApp.get(`/search?q=${query}`)
    }

}

const beerService = new BeerService()

export default beerService