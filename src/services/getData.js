import axios from 'axios'

export const getData = async() => {
  return await axios.get("https://ih-beers-api2.herokuapp.com/beers")
 
}