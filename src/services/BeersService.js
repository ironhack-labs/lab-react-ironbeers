import { http } from "./BaseService"

export const getBeers = () => {
  return http.get('/')
}

export const getBeer = (beerId) => {
  return http.get(`/${beerId}`)
}

export const getRandomBeer = () => {
  return http.get('/random')
}

export const createBeer = (values) => {
  return http.post('/new', values)
}