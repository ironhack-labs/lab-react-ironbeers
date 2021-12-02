import axios from 'axios'

class BeersService {
  constructor() {
    this.app = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
    })
  }

  getAllBeers = () => this.app.get("/")
  getOneBeer = (id) => this.app.get(`/${id}`)
  createBeer = (beerData) => this.app.post("/new", beerData)
  randomBeer= () => this.app.get("/random")
}

export default BeersService