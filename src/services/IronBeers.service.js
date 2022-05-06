import axios from 'axios'

class ironService {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' })
    }

    getAllBeers = () => {
        return this.api.get('/')
    }

    getOneBeers = id => {
        return this.api.get(`/${id}`)
    }

    getRandom = () => {
        return this.api.get(`/random`)
    }

    saveCoaster = coaster => {
        return this.api.post(`/new`, coaster)
    }
    // saveCoaster = coaster => {
    //     return this.api.get(`/search`, coaster)
    // }

}

const IronService = new ironService()

export default IronService