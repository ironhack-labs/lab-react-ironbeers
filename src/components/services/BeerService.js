import axios from 'axios';

const http = axios.create({
  baseURL:'https://ih-beer-api.herokuapp.com'
})

const listBeers = () => http.get('/beers')
  .then(response => response.data)

const detailBeer = (id) => http.get(`/beers/${id}`)
  .then(response => response.data)

const randomBeer = () => http.get('/beers/random')
  .then(response => response.data)

const newBeer = (beer) => http.post('/beers/new', beer)

export default {
  listBeers,
  detailBeer,
  randomBeer,
  newBeer
}