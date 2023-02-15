import axios from 'axios'

const _api = axios.create({
    baseURL:"https://ih-beers-api2.herokuapp.com",
    timeout:5000
})

export default _api;