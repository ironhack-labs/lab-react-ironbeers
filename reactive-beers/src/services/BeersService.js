import axios from "axios";

const API_URL = "https://ironbeer-api.herokuapp.com/beers"

const http = axios.create({
    baseURL: API_URL
})

export const listBeers = () => {
    return http.get('/all');
}

export const getBeer = (id) => {
    return http.get(`/single/${id}`);
}

export const randomBeer = () => {
    return http.get('/random');
}

export const newBeer = (beer) => {
    return http.post('/new', beer);
}
