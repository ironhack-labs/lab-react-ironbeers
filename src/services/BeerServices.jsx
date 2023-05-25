import axios from 'axios'

class BeerServices {

    constructor() {

        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }


    getAllBeers() {
        return this.api.get('/')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    getOneRandom(){
        return this.api.get('/random')
    }

}

const beerServices = new BeerServices()

export default beerServices