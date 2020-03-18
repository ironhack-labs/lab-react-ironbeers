import axios from "axios";

const url = `https://ih-beers-api2.herokuapp.com/beers`;

export const listAllBeers = async () => {
  const res = await axios.get(url);
  console.log("data", res.data);
  return res.data;
};
