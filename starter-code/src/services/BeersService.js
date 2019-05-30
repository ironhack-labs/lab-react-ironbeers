import axios from 'axios'
const apiBeer = axios.create({
  baseURL: 'https://ih-beer-api.herokuapp.com', 
})

const getAllBeers = () => apiBeer.get('/beers').then(res => res.data)

const getBeerbyId = id => apiBeer.get(`/beers/${id}`).then(res => res.data)


export default {
  getAllBeers, 
  getBeerbyId
}