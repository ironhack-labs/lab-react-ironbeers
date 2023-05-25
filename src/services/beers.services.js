import axios from 'axios'

class BeersService {

    constructor() {

        this.api = axios.create({
            baseURL: `${"https://ih-beers-api2.herokuapp.com/beers"}`
        })
    }


    getBeers() {
        return this.api.get('/')
    }

    getOneBeer(beers_id) {
        return this.api.get(`/${beers_id}`)
    }

    // saveCoaster(coasterData) {
    //     return this.api.post('/saveCoaster', coasterData)
    // }
}

const beersService = new BeersService()

export default beersService