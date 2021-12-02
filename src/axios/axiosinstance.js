import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
}
)

export default instance;
