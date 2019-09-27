import axios from "axios";

const beerService = axios.create({
  baseURL: "https://ih-beer-api.herokuapp.com/beers"
});

export const list = () => {
  return new Promise((resolve, reject) => {
    beerService
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(response => {
        resolve(response.data.splice(0, 50));
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const load = id => {
  return new Promise((resolve, reject) => {
    beerService
      .get(`/${id}`)
      .then(response => {
        resolve(response.data);
        console.log("data", response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const loadRandom = id => {
  return new Promise((resolve, reject) => {
    beerService
      .get(`/random`)
      .then(response => {
        resolve(response.data);
        console.log("data", response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
