import axios from "axios";

const http = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/",
  withCredentials: false
})

http.interceptors.response.use(
  response => response.data,
  error =>  Promise.reject(error)
)

export default http

// Axios interceptors are functions that Axios calls for every request. 
// You can use interceptors to transform the request before Axios sends it, or transform the response before Axios returns the response to your code.


































// import axios from 'axios'

// const http = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
//   withCredentials: true
// })

// http.interceptors.response.use(
//   response => response.data,
//   error => {
//     return Promise.reject(error)
//   }
// )
