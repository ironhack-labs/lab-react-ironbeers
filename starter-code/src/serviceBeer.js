import axios from 'axios'

class serviceBeer {
    constructor() {
        //No funciona????
        this.restBeersApi = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com/beers"
        })
    }

    getAllBeers() {
        return axios.get('https://ih-beers-api2.herokuapp.com/beers/')
            .then(response => response.data)
            .catch(err => console.log(`Hubo un error: ${err}`))
    }

    getOneBeers(id) {
        return axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => response.data)
            .catch(err => console.log(`Hubo un error: ${err}`))
    }

    getRandomBeers() {
        return axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => response.data)
            .catch(err => console.log(`Hubo un error: ${err}`))
    }
}

export default serviceBeer