import axios from "axios";

export const load = async function() {
  try {
    const response = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers"
    );
    return response.data;
  } catch (error) {
    console.log("There was an error in async beer load service");
    throw error;
  }
};
