import axios from 'axios';

class BeersService {
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers = () => this.instance.get("/");
    getOneBeers = (id) => this.instance.get(`/${id}`);
    createBeers = (beers) => this.instance.post("/", beers);
    getRandomBeer = () => this.instance.get("/random");
}

export default BeersService;