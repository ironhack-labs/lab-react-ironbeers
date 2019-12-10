import axios from "axios";

export const load = async function(name) {
  try {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${name}`
    );
    return response.data;
  } catch (error) {
    console.log("There was an error in async beer load service");
    throw error;
  }
};
