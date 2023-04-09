import http from "./base-api";

const list = () => http.get('/beers')
  .then((res) => res.data)

const service = {
  list
}

export default service