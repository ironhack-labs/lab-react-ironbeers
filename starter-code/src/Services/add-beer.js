import axios from "axios";

export const addBeer = async function(object) {
  try {
    const response = await axios.post(
      `https://ih-beers-api2.herokuapp.com/beers/new`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
