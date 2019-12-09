import axios from 'axios';

export const load = data =>
  new Promise((resolve, reject) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(response => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });

  export const loadSingleBeer = id =>
  new Promise((resolve, reject) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/` + id)
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
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(response => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });