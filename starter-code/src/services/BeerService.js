import axios from 'axios'

const http = axios.create({baseURL: 'https://ih-beers-api2.herokuapp.com/beers'})

export const list = () => http.get('/').then(res => res.data)
const random = () => http.get('/random').then(res => res.data)
const detail = (id) => http.get(`/${id}`).then(res => res.data)

export default {
  list,
  random,
  detail
}
