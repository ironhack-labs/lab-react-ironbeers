import axios from 'axios'

export default class Service{
    constructor(){
        this.service= axios.create({
            baseURL:'https://ih-beers-api2.herokuapp.com'
        })
    }

    getAllBeers= ()=> this.service.get("/beers")
    getRandom = () => this.service.get("/beers/random")
    getOneBear = id => this.service.get(`/beers/${id}`)
    postBear = bear => this.service.post('/beers/new', bear)

}