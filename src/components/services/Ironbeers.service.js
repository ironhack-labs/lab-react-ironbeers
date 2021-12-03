import axios from 'axios'

class IronbeersService {
  constructor() {
    this.app = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com'
    })
  }

  getAllBeers = () => this.app.get("/beers")
  getOneBeer = (id) => this.app.get(`/beer/${id}`)
  getRandomBeer = () => this.app.get("/beers/random")
  createBeer = (beerData) => this.app.post("/newBeer", beerData)
  searchBeer = () => this.app.get("/search?q=")
}

export default IronbeersService