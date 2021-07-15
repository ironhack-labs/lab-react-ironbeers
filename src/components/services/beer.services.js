import axios from 'axios'

class beerService {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeerList = () => this.app.get('/')
    getBeerDetails = beer_id => this.app.get(`/${beer_id}`) 
    // NO ENTIENDO MUY BIEN EL FUNCIONAMIENTO DE this.app.get() en REACT
    // YA QUE DE ESTA FORMA SI FUNCIONA PERO EL LINK DIRIGE A /beer/${beer_id}



}

export default beerService