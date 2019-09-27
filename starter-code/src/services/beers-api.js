import axios from "axios";

export const list = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://ironbeerapi.herokuapp.com/beers/")
      .then(response => {
        resolve(response.data);
      })
      .catch(err => err);
  });
};
export const load = id => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://ironbeerapi.herokuapp.com/beers/${id}`)
      .then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(err => err);
  });
};
export const random = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://ironbeerapi.herokuapp.com/beers/random`)
      .then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(err => err);
  });
};
