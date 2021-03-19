import axios from 'axios';

export const listBeers = async () => {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    const body = response.data;
    return body.results;
};

export const randomBeer = async () => {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
    const body = response.data;
    return body.results;
};

export const newBeer = async () => {
    const response = await axios.get('');
    const body = response.data;
    return body.results;
};

export const singleBeer = async id => {
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
    const body = response.data;
    return body.results;
};