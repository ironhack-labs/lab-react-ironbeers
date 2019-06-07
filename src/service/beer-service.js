import axios from 'axios'

export default class services {

    constructor() {

        this.service = axios.create({
            baseURL: 'https://ih-beer-api.herokuapp.com/beers'
        })
    }

    getAllBeers = () => {

        return this.service.get('/')
            .then(res => res.data)
            .catch(err => console.log('Error', err))
    }

    getOneBeer = id => {
        return this.service.get(`/${id}`)
            .then(res => res.data)
            .catch(err => console.log('Error', err))
    }

    getRandom = () => {
        return this.service.get(`/random`)
            .then(res => res.data)
            .catch(err => console.log('Error', err))
    }
}