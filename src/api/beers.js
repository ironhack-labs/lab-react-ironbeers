import { app } from './axios.config'

export const getAllBeers = () => app.get('/beers')

export const getOneBeer = (id) => app.get(`/beers/${id}`)

export const getRandomBeer = () => app.get('/beers/random')

export const postBeer = () => app.post('/beers/new')
