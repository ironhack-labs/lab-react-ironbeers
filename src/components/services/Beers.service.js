import axios from 'axios'

class BeerService {
  constructor() {
    this.app = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com'
    })
  }

  getAllBeers = () => this.app.get("/")
  getOneBeer = (id) => this.app.get(`/beer/${id}`)
  createBeer = (beerData) => this.app.post("/new", beerData)
  getRandomBeer = () => this.app.get("/random")
  searchBeer = () => this.app.get("/search?q=")
 
}

export default BeerService