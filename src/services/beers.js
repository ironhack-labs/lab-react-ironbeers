import http from './base-api'

const list = () => http.get('/beers')
  .then((res) => res.data)

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list
}
