import axios from 'axios'

class BeerService {
    constructor(){
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com'});
    }

    getAllBeers(){
        return this.api.get('/beers')
    }

    getBeerById(beerId){
        return this.api.get(`/beers/${beerId}`)
    }

    getRandomBeer(){
        return this.api.get('/beers/random')
    }

    createNewBeer(beerData){
        return this.api.post('/beers/new', beerData)
    }
}

const beersService = new BeerService()

export default beersService