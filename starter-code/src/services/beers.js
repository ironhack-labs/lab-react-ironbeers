import axios from "axios";

const baseUrl = "https://ih-beers-api2.herokuapp.com";

export const fetchAll = async () => {
  try {
    const res = await axios.get(baseUrl + "/beers");
    return res.data;
  } catch (err) {
    throw err;
  }
};

