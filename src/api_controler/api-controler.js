import axios from 'axios';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

class BeerAPI {
    constructor () {
        this.beerAPI = axios.create({apiURL});
    }

    async getAllBeers () {
        try {
            const { data } = await this.beerAPI.get('/');
            return data;
        } catch (err) {
            throw err;
        }
    }
};

const api = new BeerAPI();

export default api;