import axios from 'axios';

const http = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const getAllBeers = () => {
  return http.get('/').then((res) => res.data);
};

export const getSingleBeer = (id) => {
  return http.get(`/${id}`).then((res) => res.data);
};

export const getRandomBeer = () => {
  return http.get('/random').then((res) => res.data);
};

export const postNewBeer = (beer) => {
  return http.post('/new', beer).then((res) => res.data)
};

export const searchBeer = (param) => {
  return http.get(`/search?q=${param}`)
            .then(res => res.data)
}