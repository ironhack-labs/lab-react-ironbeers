import axios from 'axios';

export default class BeersService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            //withCredentials: true
        })
    }

    getAllBeers = () => this.instance.get('/')
    getSingleBeer = id => this.instance.get(`/${id}`)
    getRandomBeers = () => this.instance.get('/random')
}