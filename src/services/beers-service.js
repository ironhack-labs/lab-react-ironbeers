import axios from "axios";

export const fetchAllBeers = () =>
  axios
  .get("https://ih-beers-api2.herokuapp.com/beers")
  .then((beers) => beers);

export const fetchOneBeer = (id) =>        
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((beer) => beer);

export const fetchRandomBeer = () =>
  axios
    .get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((randomBeer) => randomBeer);

export const addNewBeer = (requestOptions) =>
  axios(requestOptions)
  .then(
    (newBeer) => newBeer
  );

export const searchBeer = (data) =>
  axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${data}`)
    .then((searchedBeer) => searchedBeer);