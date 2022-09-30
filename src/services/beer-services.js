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

export const addBeer = (data) =>
  axios({
    method: 'post',
    url: 'https://ih-beers-api2.herokuapp.com/beers/new',
    data: data
  })
  .then(message => console.log("New beer successfully saved to database!"))

  export const fetchSearchBeer = (searchText) =>
  axios  ({
    method: 'get',
    url: `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchText}`,
    data: searchText
  })
  .then(beers => beers)
