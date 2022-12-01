import axios from "axios"

class BeersService {
    constructor() {
        this.api = axios.create({ baseURL: "https://ih-beers-api2.herokuapp.com" })
    }

    getBeers = () => {
        return this.api.get('/beers')
    }

    getOneBeer = id => {
        return this.api.get(`/beers/${id}`)
    }

    getRandomBeer = () =>{
        return this.api.get (`/beers/random`)
    }
   
}
const BeersAPI = new BeersService()

export default BeersAPI