import axios from "axios"

export default class BeerApi {
    constructor() {
        this.app = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.app.get("/")
    getOneBeer = (id) => this.app.get(`/${id}`)
    createBeer = (beerData) => this.app.post("/new-beer", beerData)
}
