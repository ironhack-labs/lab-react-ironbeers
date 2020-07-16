import axios from 'axios';

class AllBeersService {
constructor(){

    this.service = axios.create({
        baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
    })
}

getAllBeers = () => this.service.get('/')
getOneBeer = id => this.service.get(`/${id}`)
randomBeer = () => this.service.get('/random')
createBeer = beer => this.service.post(`/newBeer`, beer)


}

export default AllBeersService