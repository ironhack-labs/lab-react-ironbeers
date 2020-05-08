import axios from 'axios'

const service = axios.create({
 baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
})

const BEERS_SERVICE ={
 allBeers: async (data) => {
  return await service.get( '/' )
 },

 singleBeer: async (id) => {
  return await service.get( `/${id}` )
 },

 randomBeer: async (data) => {
  return await service.get( '/random' )
 },

 createBeer: async (data) => {
  return await service.post( '/new', data )
 },

 searchBeer: async (data) => {
  return await service.get(`/search`)
 },
}

export default BEERS_SERVICE