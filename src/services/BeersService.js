import axios from 'axios'

const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers'
const apiUrlRandom = 'https://ih-beers-api2.herokuapp.com/beers/random'
const apiUrlAdd = 'https://ih-beers-api2.herokuapp.com/beers/new'

export function getBeers() {
  return axios.get(apiUrl).then(r => {return r.data}) 
}
export function getBeerRandom() {
  return axios.get(apiUrlRandom).then(r => {return r.data}) 
}
export function addBeer(beer) {
  return axios.post(apiUrlAdd, beer).then(r => {return r.data}) 
}