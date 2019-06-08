import axios from 'axios';

const http = axios.create({
  baseURL:'https://ih-beer-api.herokuapp.com'
})

const listBeers = () => http.get('/beers')
  .then(response => response.data)

const detailBeer = (id) => http.get(`/beers/${id}`)
  .then(response => response.data)

export default {
  listBeers,
  detailBeer
}