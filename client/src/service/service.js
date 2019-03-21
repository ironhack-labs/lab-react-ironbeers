import axios from "axios";

export default class Service{
    constructor(){

        this.service = axios.create({
            baseURL: "https://ironbeer-api.herokuapp.com/"
        })
    }

    getBeers = () => {
        return this.service.get("beers/all")
        .then(res => {
            return res.data
        })
        .catch( err => {
            console.log(err)
        })
    }

    getOneBeer = (id) => {
        return this.service.get(`/beers/single/${id}`)
        .then(res => {
            return res.data
        })
        .catch( err => {
            console.log(err)
        })
    }

    getRandomBeer = () => {
        return this.service.get(`/beers/random`)
        .then(res => {
            return res.data[0]
        })
        .catch( err => {
            console.log(err)
        })
    }

    postBeer = (beer) => {
        console.log(beer)
        this.service.post(`/beers/new`,beer)
        .then(res => {
            console.log(res)
        })
        .catch( err => {
            console.log(err)
        }) 
    }

    getQueryBeers = (query) => {
        return this.service.get(`/beers/search?q=${query}`)
        .then(res => {
            return res.data
        })
        .catch( err => {
            console.log(err)
        }) 
    }

}