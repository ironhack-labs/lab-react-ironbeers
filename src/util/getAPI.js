import axios from 'axios';

class beerApi {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        });

    }


    getAllBeers = async () => {
        try {
            const { data } = await this.api.get('/')
            return data
        } catch (error) {
            throw new Error('Cannot Fetch data')
        }
    }

    getOneBeer = async (id) => {
        try {
            const { data } = await this.api.get(`/${id}`)
            return data
        } catch (error) {
            throw new Error('Cannot Fetch data')
        }
    }

    getRandomBeer = async () => {
        try {
            const { data } = await this.api.get('/random')
            return data
        } catch (error) {
            throw new Error('Cannot Fetch data')
        }
    }

    postNewBeer = async () => {
        try {
            const { data } = await this.api.post('/new')
            return data
        } catch (error) {
            throw new Error('Cannot Fetch data')
        }
    }

    getQueryBeer = async (query) => {
        try {
            const { data } = await this.api.get(`/search?q=${query}`)
            return data
        } catch (error) {
            throw new Error('Cannot Fetch data')
        }
    }
}
export default new beerApi()