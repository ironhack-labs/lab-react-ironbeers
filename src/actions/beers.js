import axios from 'axios';

const getAllBeers = () => {
  return axios.get('https://ih-beers-api2.herokuapp.com/beers');
};

export { getAllBeers };
