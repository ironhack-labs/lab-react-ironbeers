import axios from 'axios'

class BeersService {
  constructor() {
    this.app = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
    });
  }
    getAllBeers = () => this.app.get('/')
    getBeerById = beerId => this.app.get(`/${beerId}`)

    getRandomBeer = () => this.app.get('/random')
    
    postNewBeer = () => this.app.post('/new')
    //getSearchResults = () => this.app.get('/search?q=')
}

export default BeersService;
