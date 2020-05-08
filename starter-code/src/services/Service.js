import axios from 'axios'

const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
})

const BEER_SERVICE = {
  create: async (data) => {
    return await service.post('/new', data)
  },
  readAll: async (data) => {
    return await service.get('/')
  }
}

export default BEER_SERVICE 