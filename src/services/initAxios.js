import axios from "axios";

class InitAxios {
    constructor() {
        this.axios = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }
}

export default InitAxios;