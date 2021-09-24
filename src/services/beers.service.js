import axios from 'axios';

class BeersService {
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers = () => this.instance.get("/");
    getOneBeer = (id) => this.instance.get(`/${id}`);
    createBeer = (beer) => this.instance.post("/", beer);
}

export default BeersService;