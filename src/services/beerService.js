import axios from 'axios'
class BeerService {
    constructor() {
      this.app = axios.create({
        baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
      })
    }
  
    getAllBeers = () => this.app.get("/")
    getOneBeer = (id) => this.app.get(`/${id}`)
    randomBeer = () => this.app.get("/random")
    createBeer = (beerData) => this.app.post("/new", beerData)
    
  }
  
  export default BeerService