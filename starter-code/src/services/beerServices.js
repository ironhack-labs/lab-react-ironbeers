import axios from 'axios'

const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
})

const BEER_SERVICE = {
  readAll: async (data) => {
    return await service.get('/')
  },

  readOne: async (id) => {
    return await service.get(`/${id}`)
  },

  oneRandom: async (data) => {
    return await service.get('/random')
  },

  create: async (data) => {
    return await service.post('/new', data)
  },
}

export default BEER_SERVICE
