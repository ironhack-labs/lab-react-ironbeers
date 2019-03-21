import axios from "axios"

export default class beersService{
    constructor(){

        this.service = axios.create({
            baseURL: "https://ironbeer-api.herokuapp.com/beers"
        })
    }

    getAllBeers = () => {
        return this.service.get("/all")
        .then(res => {
            return res.data
        })
        .catch( err => {
            console.log(err)
        })
    }

    getOneBeer = (id) => {
        return this.service.get(`/single/${id}`)
        .then(res => {
            return res.data
        })
        .catch( err => {
            console.log(err)
        })
    }

    searchBeer = (query) => {
        return this.service.get(`/search?q=${query}`)
        .then(res => {
            return res.data
        })
        .catch( err => {
            console.log(err)
        })
    }

    getRandomBeer = () => {
        return this.service.get("/random")
        .then(res => {
            return res.data
        })
        .catch( err => {
            console.log(err)
        })
    }

    addBeer = (body) => {
        return this.service.post("/new", body)
        .then(res => {
            console.log(res);
            return res.data;
        })
    }
}