import axios from 'axios'

const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
})

const BEERS_SERVICE = {
  readAll: async (data) => {
    return await service.get('/')
  },
  readOne: async (id) => {
    return await service.get(`/${id}`)
  },
  random: async () => {
    return await service.get('/random')
  },
  newBeer: async (data) => {
    return await service.post('/new', data)
  },
}

export default BEERS_SERVICE
