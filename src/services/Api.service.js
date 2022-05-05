import axios from 'axios'

class ApiBeers {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/' })
    }

    getAllBeers = () => {
        return this.api.get('/beers')
    }

    getOneBeer = id => {
        return this.api.get(`/beers/${id}`)
    }

    getRandom=()=>{
        return this.api.get('/beers/random')
    }

    saveBeers = beer => {
        return this.api.post(`/beers`, beer)
    }
}

const apiBeers = new ApiBeers()

export default apiBeers