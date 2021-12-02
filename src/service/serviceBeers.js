import axios from 'axios'
class ServiceBeers {
    constructor() {
      this.app = axios.create({
        baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
      })
    }
  
    getAllBeers = () => this.app.get("/")
    getOneBeer = (id) => this.app.get(`/${id}`)
    randomBeer = () => this.app.get("/random-beer")
    
  }
  
  export default ServiceBeers