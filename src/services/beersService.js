import axios from "axios";

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";

const apiUrlRandom = "https://ih-beers-api2.herokuapp.com/beers/random";

const apiUrlNew = "https://ih-beers-api2.herokuapp.com/beers/new";

export function getBeers() {
  return axios.get(apiUrl).then((r) => {
    return r.data;
  });
}

export function getRandomBeer() {
  return axios.get(apiUrlRandom).then((r) => {
    return r.data;
  });
}
export function addNewBeer(beer) {
  return axios.post(apiUrlNew, beer).then((r) => {
    return r.data;
  });
}
