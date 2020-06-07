import axios from 'axios';
import NewBeer from './../views/NewBeer';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

const listAllBeers = () => {
  return new Promise((resolve, reject) => {
    instance
      .get('/')
      .then((response) => {
        console.log(response.data);
        // const allBeers = response.data;
        // console.log(allBeers);
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

const oneBeer = (id) => {
  return new Promise((resolve, reject) => {
    instance
      .get(`/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => reject(error));
  });
};

const addBeer = (NewBeer) => {
  return new Promise((resolve, reject) => {
    instance
      .post('/new', NewBeer)
      .then((response) => {
        resolve(response);
      })
      .catch(reject);
  });
};

export { listAllBeers, oneBeer, addBeer };
