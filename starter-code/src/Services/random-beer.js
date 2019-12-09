import axios from "axios";

export const randomBeer = async function() {
  try {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/random`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
