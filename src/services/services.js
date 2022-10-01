import axios from "axios";

export const fetchBeers = () =>
  axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((beers) => beers);


export const fetchBeerById = (id) => {
  axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then((beer) => beer);
}

export const fetchRandomBeer = () =>
  axios
    .get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((beer) => beer);

export const fetchNewBeer = (data) => {
  axios
    .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
    .then((beer) => {
      console.log('Beer created successfull: ', beer);
    })
    .catch((error) => {
      console.log('Error', error);
    })
}


