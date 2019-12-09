import axios from 'axios';

const NewBeerService = async function(obj) {
  axios.post('https://ih-beers-api2.herokuapp.com/beers/new', obj);
};

export default NewBeerService;
