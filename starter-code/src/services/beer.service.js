import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/'
        })
    }

    getBeer = () => this.service.get('/beers').then(response => response.data)
    getRandom = () => this.service.get('/beers/random').then(response => response.data)
    postBeer = beer => this.service.post(`/beers/new`, beer).then(response => response.data)
    getDetails = id => this.service.get(`beers/${id}`).then(response => response.data)
    getSearch = data => this.service.get(`/search?q=${data}`).then(response => response.data)

}