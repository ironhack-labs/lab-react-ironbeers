import axios from "axios";

const getApi = 'https://ih-beers-api2.herokuapp.com/beers'

export function getBeers() {
  return axios.get(getApi).then(get => {return get.data})
}