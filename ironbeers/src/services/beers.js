import axios from "axios";

const base_url = "https://ih-beer-api.herokuapp.com/beers";

export const getBeers = () => {
  return axios
    .get(`${base_url}/`)
    .then(res => res.data)
    .catch(err => err);
};
