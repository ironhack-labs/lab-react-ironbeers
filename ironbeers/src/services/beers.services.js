import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'https://ih-beer-api.herokuapp.com/beers/'
        })
    }

    getAllBeers = () => this.service.get('')
    getOneBeer = id => this.service.get(`/${id}`)
    getRandomBeer = () => this.service.get('random')
    createNewBeer = newOne => this.service.post(`createNewBeer`, newOne)

}
