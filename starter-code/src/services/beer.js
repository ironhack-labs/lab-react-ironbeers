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

// TODO ====> NEW SERVICE TO DO AN AXIOS.POST() THAT RECEIVES THE DATA AS AN ARGUMENT AND ADD IT TO THE API
    export const addBeer = data =>
  new Promise((resolve, reject) => {
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, data)
      .then(response => {
        console.log("CREATED BEER", response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });

  