import axios from "axios"

class BeerServices {
    constructor() {
        this.api = axios.create({ baseURL: "https://ih-beers-api2.herokuapp.com" })
    }
    getAll() {
        return this.api.get(`/beers`)
    }
    getOne(id) {
        return this.api.get(`/beers/${id}`)
    }
    getRandom() {
        return this.api.get(`/beers/random`)
    }
    create(data) {
        return this.api.post(`/beers/new`, data);
    }
}

const beerServices = new BeerServices()

export default beerServices;