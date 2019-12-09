import axios from "axios";

export const getBeers = async function() {
  try {
    const response = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
