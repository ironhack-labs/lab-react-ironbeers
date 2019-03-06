import axios from 'axios';


const API_URL = 'https://ironbeer-api.herokuapp.com/beers';

const listBeers = () => {
  return axios.get(`${API_URL}/all`);
};

const randomBeer = () => {
  return axios.get(`${API_URL}/random`);
};

const newBeer = (beer) => {
  return axios.post(`${API_URL}/new`, beer);
};

export { listBeers, randomBeer, newBeer }

