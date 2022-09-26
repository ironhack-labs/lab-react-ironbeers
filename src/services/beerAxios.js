import axios from 'axios';

class beerAxios {
    constructor() {
        this.axios = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getAllBeers() {
        return this.axios.get('/').then((response) => response.data)
    }

    getOneBeer(id) {
        return this.axios.get(`/${id}`).then((response) => response.data)
    }

}

export default beerAxios;