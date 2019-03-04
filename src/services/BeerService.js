import axios from 'axios'

const API_URL = 'https://ironbeer-api.herokuapp.com/beers/all'

const http = axios.create({
  baseURL: API_URL
})

const ListBeers = () => {
  return http.get(`/`)
}

// const ListBeers = () => {
//  return axios.get(`${API_URL}`)
//  }

export {ListBeers};