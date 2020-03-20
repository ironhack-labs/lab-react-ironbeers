import axios from "axios";

const url = `https://ih-beers-api2.herokuapp.com/beers`;
const urlRandom = `https://ih-beers-api2.herokuapp.com/beers/random`;

export const listAllBeers = async () => {
  const res = await axios.get(url);
  //console.log("listAllBeers --> data", res.data);
  return res.data;
};

export const randomBeer = async () => {
  const res = await axios.get(urlRandom);
  //console.log("random --> data", res.data);
  return res.data;
};
