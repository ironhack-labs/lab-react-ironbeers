import axios from 'axios'

class BeerService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAll = () => {
        return this.axiosApp.get('/')
    }

    getBeerById = (beer_id) => {
        return this.axiosApp.get(`/${beer_id}`)
    }

    getRandomBeer = () => {
        return this.axiosApp.get('/random')
    }

    createNewBeer = (beerData) => {
        return this.axiosApp.post('/new', beerData)
    }

    // searchBeer = (beer) => {
    //     return this.axiosApp.get()
    // }

}

const beerService = new BeerService()

export default beerService