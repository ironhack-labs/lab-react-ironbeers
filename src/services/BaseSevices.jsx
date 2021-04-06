import axios from 'axios';

const http= axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
})

http.interceptors.response.use(response => response.data);


export const getBeers = () =>{
    return http.get('/')
};

export const getRandomBeer = () => {
    return http.get('/random')
};

export const getBeerDetail = () =>{
    return http.get('/:id')
} 
