import axios from "axios";

export const fetchAllBeers = () => 
  axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((beers) => beers);

export const fetchBeerDetail = (id) => 
  axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then((beerDetail) => beerDetail);

export const fetchRandomBeer = () => 
  axios
  .get('https://ih-beers-api2.herokuapp.com/beers/random')
  .then((beerDetail) => beerDetail)

export const addNewBeer = (data) => 
  axios({
    method: 'post',
    url: 'https://ih-beers-api2.herokuapp.com/beers/new',
    data: data
  })
  .then((message) => console.log('Success', message))

export const searchBeer = (query) =>
  axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
    .then((beers) => beers);