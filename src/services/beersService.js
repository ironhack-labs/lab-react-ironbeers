import http from "./base-api";

const list = () => http.get('/beers')
  .then((response) => {
    response.data.id = response.data._id
    delete response.data._id
    return response.data
  })
  .catch(console.error)

const beer = (id) => http.get(`/beers/${id}`)
  .then((response) => {
    return response.data
  })
  .catch(console.error)

export default {
  list,
  beer
}