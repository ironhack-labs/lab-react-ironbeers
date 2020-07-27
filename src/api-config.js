import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com',
});
