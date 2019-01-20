import axios from "axios";
export const getAll = () => {
  return axios
    .get("https://ironbeer-api.herokuapp.com/beers/all")
    .then(data => data);
};

export const getOne = ({ id }) => {
  return axios
    .get(` https://ironbeer-api.herokuapp.com/beers/single/${id}`)
    .then(res => res);
};
