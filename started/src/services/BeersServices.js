import axios from 'axios';

const API_URL = 'https://ironbeer-api.herokuapp.com/beers'

const http = axios.create({
    baseURL: API_URL
})

export const beersList = () => {
    return http.get('/beers');
}