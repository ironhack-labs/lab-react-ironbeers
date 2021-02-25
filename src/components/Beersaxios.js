import axios from 'axios';




 class theBeers {

     constructor() {
         this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
        })
    }
     getAllBeers = () => this.api.get('/')
    //  getOnebeer = beerId => this.api.get(`/${beerId}`)
    //  getRandombeer = () => this.api.get('/random')
}


export default theBeers; 

