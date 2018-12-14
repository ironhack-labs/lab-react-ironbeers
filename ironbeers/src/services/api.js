import axios from 'axios'

const host = 'https://ironbeer-api.herokuapp.com/beers'

//getAll
export const getAll = () => {
  return axios.get(host + '/all')
    .then(r=>r.data)
    .catch(e=>e.response)
}

//get single beer
export const getSingle = id => {
  return axios.get(host + '/single/' + id)
    .then(r=>r.data)
    .catch(e=>e.response)
}

//get random beer
export const getRandom = id => {
  return axios.get(host + '/random')
    .then(r=>r.data[0])
    .catch(e=>e.response)
}

//add new beer
export const newBeer = beer => {
  return axios.post(host + '/new', beer)
    .then(r=>r.data)
    .catch(e=>e.response)
}