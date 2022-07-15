import axios from 'axios'


class BeersServices {
    constructor() {

        this.api = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com/beers"
        })
    }

    getAllBeers() {
        return this.api.get('/')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

}

const beersServices = new BeersServices()
export default beersServices