import axios from 'axios'

const http = axios.create({
  baseURL: 'https://ih-beer-api.herokuapp.com/beers'
})

const listBeers = () => http.get('/')
  .then(res => res.data)

export default {
  listBeers,
}