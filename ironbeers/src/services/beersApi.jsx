import axios from 'axios'

const Link = 'https://ironbeer-api.herokuapp.com/beers'

export const all = () => {
    return axios.get(Link+'/all')
        .then(response =>response.data)
        .catch(e => console.log(e))
}

export const newBeer = (beer) => {
    return axios.post(Link+'/new',beer)
        .then(response =>response.data)
        .catch(e => console.log(e))
}

export const random = () => {
    return axios.get(Link+'/random')
        .then(response =>response.data)
        .catch(e => console.log(e))
}
