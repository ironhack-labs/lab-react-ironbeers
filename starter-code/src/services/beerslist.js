import axios from 'axios';

export const load = async function(name) {
  try {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers`
    );
    return response.data;
  } catch (error) {
    console.log('There was an error in async beers load service');
    throw error;
  }
};
