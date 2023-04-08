import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL || 'https://ih-beers-api2.herokuapp.com'
})

export default http;