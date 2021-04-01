import axios from 'axios';

const http = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com'
})

http.interceptors.response.use(response => response.data)

export const getAllBeers = () => {
    return http.get('/beers')
}

export const getBeer = (id) => {
    return http.get(`/beers/${id}`)
}