import axios from 'axios';

const listAllBeers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log(response);
        // const allBeers = Object.keys(result.data.message);
        // console.log(allBeers);
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

export { listAllBeers };
