import axios from "axios";

export const fetchBeers = () =>
  axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((beers) => beers);

export const fetchBeerDetail = (id) => // ponemos el id ahi porque es un parametro q luego podemos utilizar
  axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then((beersDetail) => beersDetail)

export const fetchRandomBeer = () =>
  axios
    .get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((randomBeers) => randomBeers)


    