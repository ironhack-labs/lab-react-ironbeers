import axios from 'axios'
const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'
const beerService = axios.create({baseURL})

export const getAllBeers = () => beerService.get('')
export const getSingleBeer = id => beerService.get(`/${id}`)
export const getRandomBeer = () => beerService.get(`/random`);
export const newBeer = beer => beerService.post('/new', beer)
export const searchBeer = query => beerService.get(`search?q=${query}`)