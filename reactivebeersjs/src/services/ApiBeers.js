import axios from "axios";
const url = "https://ironbeer-api.herokuapp.com/beers";

export const getAllBeers = () => {
  return axios
    .get(url + "/all")
    .then(beers => {
      return beers.data;
    })
    .catch(err => err.response);
};

export const getBeerDetail = id => {
  return axios
    .get(url + "/single/" + id)
    .then(beer => beer.data)
    .catch(err => err.response);
};

export const getRandomBeer = () => {
  return axios
    .get(url + "/random")
    .then(beers => {
      return beers.data[0];
    })
    .catch(err => err.response);
};

export const newBeer = beer => {
  return axios
    .post(url + "/new", beer)
    .then(addedBeer => {
      return addedBeer.data;
    })
    .catch(err => err.response);
};
