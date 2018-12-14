import axios from 'axios'

const link = "https://ironbeer-api.herokuapp.com/beers"

export const all = () => {
    return axios.get(link+"/all")
    .then( response => response.data)
    .catch(e => e.response)
}

export const newBeer = () => {
    return axios.post(link+"/new")
    .then( response => response.data)
    .catch(e => e.response)
}

export const randomBeer = () => {
    return axios.get(link+"/random")
    .then( response => response.data)
    .catch(e => e.response)
}