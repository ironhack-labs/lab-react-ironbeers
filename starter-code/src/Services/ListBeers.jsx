import axios from 'axios';

export const beers = async function (beers) {
	try {
  const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
  console.log(response);
	return response
	}  catch (error) {
	throw error;
	}
	}