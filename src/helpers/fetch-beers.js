import axios from 'axios'

class FetchBeers {
    constructor(){
        let service = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`,
        });
        this.service = service
    }

    allBeers = () => {
        return this.service.get('/')
    }

    beerDetails = id => {
        return this.service.get(`/${id}`)
    }

    randomBeer = () => {
        return this.service.get('/random')
    }

    newBeer = beer => {
        return this.service.post('/new', {beer})
    }

    searchBeer = query => {
        return this.service.get(`/search?q=${query}`)
    }
}

export default FetchBeers