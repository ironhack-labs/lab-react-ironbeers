import axios from 'axios'

const http = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const getAllBeers = () => {
    return http.get('/')
     .then(response => response.data)
}