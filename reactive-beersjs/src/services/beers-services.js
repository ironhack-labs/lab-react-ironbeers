import axios from 'axios'

export default class services {

    constructor() {

        this.service = axios.create({
            baseURL: 'https://ih-beer-api.herokuapp.com/'
        })
    }

    getAllBeers = () => {
        return this.service.get('beers')
            .then(res => res.data.slice(0, 10))
            .catch(err => console.log('Error', err))
    }

    getOneBeer = id => {
        return this.service.get(`beers/${id}`)
            .then(res => res.data)
            .catch(err => console.log('Error', err))
    }

    getRandom = () => {
        return this.service.get(`beers/random`)
            .then(res => res.data)
            .catch(err => console.log('Error', err))
    }
}