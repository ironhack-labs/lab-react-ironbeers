import axios from 'axios';

const http = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com'
})

http.interceptors.response.use(response => {
    //console.log('response.data', response.data)
    return (response.data)
})

export const getAllBeers = () => {
    return http.get('/beers');
}

export const getBeer = (id) => {
    return http.get(`/beers/${id}`);
}

export const getRandomBeer = () => {
    return http.get('/beers/random');
}

export const createBeer = (formFields) => {
    return http.post('/beers/new', {...formFields});
}

export const searchBeer = (searchQuery) => {
    //console.log('searchQuery', searchQuery)
    return http.get(`/beers/search?q=${searchQuery}`);
}