import axios from 'axios';

const getBeerById = async function(id) {
  try {
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
    return response.data;
  }
  catch(err) {
    console.log(err);
    throw(err);
  }
}

export default getBeerById;