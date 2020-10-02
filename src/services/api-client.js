import axios from 'axios';

const http = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const allBeer = () => {
  return http.get('/').then((res) => res.data);
};

export const idBeer = (id) => {
  return http.get(`/${id}`).then((res) => res.data);
};

export const randomBeer = () => {
  return http.get('/random').then((res) => res.data);
};

export const newBeer = (beer) => {
  return http.post('/new', beer).then((res) => res.data)
};

export const searchBeer = (param) => {
  return http.get(`/search?q=${param}`)
            .then(res => res.data)
}
