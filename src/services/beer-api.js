import axios from "axios"

class Service {

    constructor() {
        this.axiosService = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' })
    }

    getAllBeers = () => this.axiosService.get("/")

    getBeerByID = (beerID) => this.axiosService.get(`/${beerID}`)

    getRandomBeer = () => this.axiosService.get("/random")

    newBeer = (beer) => this.axiosService.post("/new", beer)

    filterBeer = (query) => this.axiosService.get(`/search?q=${query}`)
}

const serviceApi = new Service()

export default serviceApi