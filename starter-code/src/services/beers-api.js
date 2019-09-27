import axios from "axios";

const beerService = axios.create({
  baseURL: "https://ironbeerapi.herokuapp.com/beers/all",
});


export const list = () {
  return new Promise((resolve, reject) => {
    beerService
    .get("https://ironbeerapi.herokuapp.com/beers/all").slice(20)
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
    beerService
    .get()
  })
}