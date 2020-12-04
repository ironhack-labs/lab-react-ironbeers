import axios from 'axios'

class ApiHandler {
    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }
}

export default ApiHandler