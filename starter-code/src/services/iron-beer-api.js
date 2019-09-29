import axios from 'axios';

const ironBeerService = axios.create({
  baseURL: 'https://ih-beer-api.herokuapp.com/'
});

export function list() {
  return new Promise((resolve, reject) => {
    ironBeerService
      .get('/beers')
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function load(id) {
  return new Promise((resolve, reject) => {
    ironBeerService
      .get(`/beers/${id}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export const randomBeer = () => {
  return new Promise((resolve, reject) => {
    ironBeerService
      .get(`/beers/random`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
