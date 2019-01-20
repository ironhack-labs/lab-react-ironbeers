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

export const getRandom = () => {
  return axios
    .get("https://ironbeer-api.herokuapp.com/beers/random")
    .then(res => res);
};

export const newOne=(newobj)=>{
  return axios.post("https://ironbeer-api.herokuapp.com/beers/new",newobj).then(res=>res)
}