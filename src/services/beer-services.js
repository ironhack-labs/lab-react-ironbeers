import axios from 'axios';

export const fetchBeer = () =>
  axios
  .get("https://ih-beers-api2.herokuapp.com/beers")
  .then(beers => beers)

export const fetchBeerId = (id) =>
  axios
  .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
  .then(beerDetail => beerDetail)

export const fetchRandomBeer = () =>
  axios
  .get("https://ih-beers-api2.herokuapp.com/beers/random")
  .then(beerRandom => beerRandom)