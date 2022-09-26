import axios from 'axios';

class BeersAxios {
    constructor() {
        this.axios = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }
    getAllBeers() {
        return this.axios.get().then((response) => response.data)
    }

    getOneBeer(id) {
        return this.axios.get(`/${id}`).then((response) => response.data)
    }

    getBeerRandom() {
        return this.axios.get(`/random`).then((response) => response.data)
    }
}

export default BeersAxios; 