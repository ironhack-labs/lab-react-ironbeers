import axios from 'axios';

const BASE_URL = 'https://ih-beers-api2.herokuapp.com'

const api = {

  get: function (endpoint) {
    const url = `${BASE_URL}${endpoint}`
    return axios.get(url)
  },

  post: function (endpoint, data) {
    const url = `${BASE_URL}${endpoint}`
    return axios.post(url, data)
  }


}

export default api
