import axios from 'axios';

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers';

const beerService = axios.create({ baseURL });

export const getAllBeers = async() => {
    const { data } = await beerService.get('/');
    return data;
}

export const getBeer = async(beerID) => {
    const { data } = await beerService.get(`/${beerID}`)
    return data;
}

export const getRandomBeer = async() => {
    const { data } = await beerService.get('/random');
    return data;
};