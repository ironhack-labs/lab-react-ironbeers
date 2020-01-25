import axios from 'axios'

const http = axios.create({baseURL: 'https://ih-beers-api2.herokuapp.com/beers'})

export const list = () => http.get('/').then(res => res.data)
export const random = () => http.get('/random').then(res => res.data)
export const detail = (id) => http.get(`/${id}`).then(res => res.data)
export const newBeer = () => http.post('/new-beer').then(res => res.data)

