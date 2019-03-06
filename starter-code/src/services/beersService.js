import axios from 'axios';


const API_URL = "https://ironbeer-api.herokuapp.com/beers"

const http = axios.create({
  baseURL: API_URL
})

export const listBeers = () => {
  return http.get('/all')
}

export const randomBeer = () => {
  return http.get('/random')
}

export const detailBeer = () => {
  return http.get('/search?q={query}')
}

export const newBeer = () => {
  return http.post('/new')
}