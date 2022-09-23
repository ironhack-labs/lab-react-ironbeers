import axios from 'axios';

class BeersAxios {
    constructor() {
        this.axios = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getAllBeers() {
        return this.axios.get(`/`).then((response) => response.data)
    }

    getOneBeerById(beerid) {
        return this.axios.get(`/${beerid}`).then((response) => response.data);
    }

    randomBeer() {
        return this.axios.get(`/random`).then((response) => response.data);
    }

    createBeer(body) {
        return this.axios.post('/new', body).then((response) => response.data);
    }

    updateBeer(id, body) {
        return this.axios.put(`/${id}`, body).then((response) => response.data);
    }

    deleteBeer(id) {
        return this.axios.delete(`/${id}`).then((response) => response.data);
    }

}

export default BeersAxios;