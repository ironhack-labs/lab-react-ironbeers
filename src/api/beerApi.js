import axios from 'axios'

const service = axios.create({
    baseURL: "https://ih-beers-api2.herokuapp.com/beers"
})

export default {
    service, 


    getBeers() {
        return service.get('/');
    },

    getOneBeer(id) {
        return service.get('/' + id)
    },

    getRandomBeer() {
        return service.get('/random')
    },

    postNewBeer(data) {
        return service.post('/new', data)
    }

}