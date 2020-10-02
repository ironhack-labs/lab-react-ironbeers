import axios from 'axios';

const http = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const getAllBeers = () => {
    return http.get('/')
        .then(response => response.data);
};

export const getOneBeer = (id) => {
    return http.get(`/${id}`)
        .then(response => response.data);
};

export const getRandomBeer = () => {
    return http.get('/random')
        .then(response => response.data)
};

export const createNewBeer = (dataToAdd) => {
    return http.post('/new', dataToAdd)
        .then(response => {
            console.log('200 status: ', response);
        });
};