import axios from "axios";

class ApiBeers{
    constructor() {
        this.app = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com'
        })
    }
    
    getAllBeers = () => this.app.get("/beers")
    getOneBeer = (id) => this.app.get(`/beer/${id}`)
    createBeer = (coasterData) => this.app.post("/new-beers", coasterData)
}

export default  ApiBeers

