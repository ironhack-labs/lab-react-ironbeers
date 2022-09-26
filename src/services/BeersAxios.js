import axios from 'axios';

class InitAxios {
    constructor() {
        this.axios = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com`
        })
    }

    getAllBeers() {
        return this.axios.get(`/beers`).then((response) => response.data)
    }

}

export default InitAxios;


// /beers