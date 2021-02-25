import axios from 'axios'

class BeerService {
    constructor(){
        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getBeers =() => this.api.get('/AllBeers')
    getBeer = beerId => this.api.get(`/OneBeer/${beerId}`)


}
export default BeerService