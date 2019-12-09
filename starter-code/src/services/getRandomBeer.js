import axios from 'axios';

const getRandomBeer = async function() {
  try {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
    return response.data;
  }
  catch(err) {
    console.log(err);
    throw(err);
  }
}

export default getRandomBeer;
