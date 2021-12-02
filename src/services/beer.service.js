import axios from 'axios'

class BeerService {
  constructor() {
    this.app = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
    })
  }

  getAllBeers = () => this.app.get("/")
  getRandomBeer = (_id) => this.app.get(`/random`)
  createBeer = (beerData) => this.app.post("/new", beerData)
}

export default BeerService