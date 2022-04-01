import axios from 'axios'

const http = axios.create({
    baseURL:'https://ih-beers-api2.herokuapp.com',
    withCredentials: false
})

http.interceptors.response.use(
    response => response.data,
    error => new Promise.reject(error)
)

export default http