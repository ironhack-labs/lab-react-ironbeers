import axios from 'axios';

class BeerService {
    constructor() {
        this.baseUrl = 'https://ih-beers-api2.herokuapp.com/beers';

        this.app = axios.create({
            baseURL: this.baseUrl
        })
    }

    getBeers = () => this.app.get('/');
    getRandomBeer = () => this.app.get('/random');
    createBeer = (beer) => this.app.post('/new', beer);


}

export default BeerService;