import axios from 'axios';

export const loadBeersList = data =>
  new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API}/beers`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });

  export const loadSingleBeer = id =>
  new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API}/beers/` + id)
      .then(response => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });


  export const loadRandomBeer = id =>
  new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API}/beers/random`)
      .then(response => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
