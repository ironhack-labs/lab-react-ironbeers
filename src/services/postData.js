import axios from "axios"

export const createBeer = async (data) => {
  const requestUrl = `https://ih-beers-api2.herokuapp.com/beers/new`
  return await axios.post(requestUrl, {...data})
  
}