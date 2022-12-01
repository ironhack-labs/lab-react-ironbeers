import axios from 'axios'

class ApiService {

    constructor() {

        this.api = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com/beers"
        })
    }


    getBeers() {
        return this.api.get('')
    }
    getOneBeer() {
        return this.api.get(`/:beer_id`)
    }
}

const apiService = new ApiService()

export default apiService