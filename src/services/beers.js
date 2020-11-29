import axios from 'axios'
const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

const beersService = axios.create({baseURL})

export const getAllBeers = () => beersService.get('')

export const getSingleBeer = (id) => beersService.get(`/${id}`)

export const getRandomBeer = () => beersService.get(`/random`);

export const newBeer = beer => beersService.post('/new', beer)
