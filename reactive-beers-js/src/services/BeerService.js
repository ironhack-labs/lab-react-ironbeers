import axios from 'axios'

const http = axios.create({
  baseURL: 'https://ih-beer-api.herokuapp.com/beers'
})

const listBeers = () => http.get('/')
  .then(res => res.data)

const getBeer = id => http.get(`/${id}`)
  .then(res => res.data)

const getRandom = () => http.get('/random')
  .then(res => res.data)

const newBeer = beer => http.post('/new', beer)
  .then(res => res.data)

const searchBeer = txt => http.get(`/search?q=${txt}`)
  .then(res => res.data)

export default {
  listBeers,
  getBeer,
  getRandom,
  newBeer,
  searchBeer,
}