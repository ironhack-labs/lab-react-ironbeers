import axios from 'axios';

const listAllBeers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        // console.log(response.data);
        // const allBeers = response.data;
        // console.log(allBeers);
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

const oneBeer = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => reject(error));
  });
};

export { listAllBeers, oneBeer };
