import axios from 'axios'

class BeerServices {
    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com' })
    }

    getAllBeers = () => {
        return this.api.get('./beers')
    }

}
const beerServices = new BeerServices()

export default beerServices