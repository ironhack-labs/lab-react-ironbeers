import axios from 'axios';

const http = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com" 
})

export default http