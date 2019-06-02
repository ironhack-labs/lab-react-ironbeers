import axios from 'axios'

const http = axios.create({
  baseURL:'https://ih-beer-api.herokuapp.com'
})

const BeerList = () => http.get('/beers')
  .then(res => res.data)


const Beer = (id) => http.get(`/beers/${id}`)
  .then(res => res.data)

const RandomBeer = () => http.get('/beers/random')
  .then(res => res.data)

  export default {
    BeerList,
    Beer,
    RandomBeer
  }