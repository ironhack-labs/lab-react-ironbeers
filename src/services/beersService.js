import axios from 'axios'

class BeerService {
  constructor() {
    this.app = axios.create({
      baseURL: "https://ih-beers-api2.herokuapp.com/beers"
    })
  }

  getAllBeers = () => this.app.get("/")
  getOneBeer = (id) => this.app.get(`/${id}`)
  getRandomBeer = (id) => this.app.get('/random')

//   createBeer = (coasterData) => this.app.post("/newCoaster", coasterData)
}

export default BeerService