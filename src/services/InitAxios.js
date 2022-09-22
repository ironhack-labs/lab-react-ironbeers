import axios from 'axios';

class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com${path}`
        })
    }
}

export default InitAxios;