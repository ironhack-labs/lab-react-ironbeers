import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
})

http.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)