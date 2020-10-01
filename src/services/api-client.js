const axios = require('axios')

const http = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
});

export const getAllBeers = () => {
  return http.get('/beers')
    .then(response => response.data)
}

// export const getCountry = (cca3) => {
//   return http.get(`/countries/${cca3}`)
//     .then(response => response.data)
// }