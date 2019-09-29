import axios from "axios";

const ironBeerService = axios.create({
  baseURL: "https://ih-beer-api.herokuapp.com/beers"
});

export const list = () => {
  return new Promise((resolve, reject) => {
    ironBeerService
      .get("/all")
      .then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
