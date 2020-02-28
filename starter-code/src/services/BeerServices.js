import axios from 'axios'

class BeerServices {

    constructor() {
        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.service.get('/').then(response => response.data)
    getBeerDetails = id => this.service.get(`/${id}`).then(response => response.data)
    getRandomBeer = () => this.service.get(`/random`).then(response => response.data)


    // postCoaster = coaster => this.service.post(`/new`, coaster).then(response => response.data)
}

export default BeerServices