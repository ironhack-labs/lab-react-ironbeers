import axios from 'axios'

class BeerService {
  constructor() {
    this.app = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com'
    })
  }

  getAllBeers = () => this.app.get("/beers")
  getOneBeer = (id) => this.app.get(`/beers/${id}`)
  getRandom = () => this.app.get("/beers/random")
  createBeer = (beerData) => this.app.post("/newBeer", beerData)
  searchBeer = () => this.app.get("/beers/search?q=")
}

export default BeerService