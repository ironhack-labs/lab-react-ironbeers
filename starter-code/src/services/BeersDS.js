import axios from "axios";

export const getBeers = async () => {
    return axios.get('https://ih-beers-api2.herokuapp.com/beers');
}

export const getBeerById = (id) => {
    return axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
}

export const getRandomBeer = () => {
    return axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
}

export const postNewBeer = (beer) => {
    return axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, beer);
}