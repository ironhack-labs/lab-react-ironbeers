import axios from 'axios';

class BeersAPI {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
        });
    }

    getAllBeers() {
        return this.axios.get('/').then((response) => response.data);
    }

    getOneBeerById(id) {
        return this.axios.get(`/${id}`).then((response) => response.data);
    }

    getRandomBeer() {
        return this.axios.get('/random').then((response) => response.data);
    }

    createBeer(body) {
        return this.axios.post('/new', body).then((response) => response.data);
    }

    getSearchBeer(query) {
        return this.axios.get(`/search?q=${query}`).then((response) => response.data);
    }
}

export default new BeersAPI();
