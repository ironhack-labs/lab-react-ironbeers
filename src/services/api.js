import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export default api;
