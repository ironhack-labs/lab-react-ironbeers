import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'https://ih-beer-api.herokuapp.com/beers'
        })
    }

    getBeers = () => this.service.get('')
}