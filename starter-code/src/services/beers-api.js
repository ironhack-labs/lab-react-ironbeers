import axios from "axios";

const beersService = axios.create({
  baseURL: "https://ih-beer-api.herokuapp.com/beers"
});

export const beerList = () => {
  return new Promise((resolve, reject) => {
    beersService
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
