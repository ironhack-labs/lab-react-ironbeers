import axios from 'axios'

class BeersService {
    
    constructor () {
        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getBeers = () => this.api.get('/')
    getBeer = beerId => this.api.get(`/getOneBeer/${beerId}`)
}

export default BeersService