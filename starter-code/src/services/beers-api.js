import axios from "axios";

const beersService = axios.create({
  baseURL: "https://ih-beer-api.herokuapp.com/beers"
});

export const list = () => {
  return new Promise((resolve, reject ) => {
    beersService
    .get("/beers?limit=50")
    .then(response => {
      resolve(response.data.results);
    })
    .catch(error => {
      reject(error);
    });
  });
};

export const load = id => {
  return new Promise ((resolve, reject) => {
    beersService
    .get(`/beers/${id}`)
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
  });
};