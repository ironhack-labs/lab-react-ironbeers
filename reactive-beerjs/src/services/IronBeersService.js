import axios from 'axios'

const http = axios.create({
  baseURL:'https://ih-beer-api.herokuapp.com/beers'
})

const BeerList = () => http.get('/')
  .then(res => res.data)


const Beer = (id) => http.get(`/${id}`)
  .then(res => res.data)

const RandomBeer = () => http.get('/random')
  .then(res => res.data)

const NewBeer = beer => http.post('/new',beer)
  .then(res => res)

const filterBeer = query => http.get(`/search?q=${query}`)
  .then(res => res.data)

  export default {
    BeerList,
    Beer,
    RandomBeer,
    NewBeer,
    filterBeer
  }