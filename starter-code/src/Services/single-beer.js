import axios from "axios";

export const singleBeer = async function(beerId) {
  try {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
