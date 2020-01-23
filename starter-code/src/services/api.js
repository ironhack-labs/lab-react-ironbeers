import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/'
});

export default api;