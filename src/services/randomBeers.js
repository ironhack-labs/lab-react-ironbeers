import axios from 'axios';

const httpRandomBeers = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers/random',
});

httpRandomBeers.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error('Error with the request:', error);
        return Promise.reject(error);
    }
);

export default httpRandomBeers;