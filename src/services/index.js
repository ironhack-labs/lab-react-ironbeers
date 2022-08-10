import axios from 'axios'


export const beersApi = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
})

