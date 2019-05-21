import axios from "axios";

const base_url = "https://ih-beer-api.herokuapp.com/beers";

export const getBeers = () => {
  return axios
    .get(`${base_url}/`)
    .then(res => res.data)
    .catch(err => err);
};

export const getBeer = (id) => {
  return axios
    .get(`${base_url}/${id}`)
    .then(res => res.data)
    .catch(err => err);
};

export const getRandomBeer = () => {
  return axios
    .get(`${base_url}/random`)
    .then(res => res.data)
    .catch(err => err);
};

export const postBeer = (beer) => {
  return axios
    .post(`${base_url}/new`,beer)
    .then(res => res.data)
    .catch(err => err);
};