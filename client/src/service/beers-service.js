import axios from 'axios'

export default class beersService {
  constructor () {
    this.apiHandler = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers'})
  }

  getAllBeers = () => this.apiHandler.get('/')
  getOneBeer = id => this.apiHandler.get(`/${ id }`)
  getRandomBeer = () => this.apiHandler.get('/random')
  createBeer = beer => this.apiHandler.post('/new', beer)
  filterBeers = queries => this.apiHandler.get(`/search?${queries}`)
}