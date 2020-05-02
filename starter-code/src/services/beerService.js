import axios from 'axios';

export const getBeers = () => {
    return axios.get("https://ih-beers-api2.herokuapp.com/beers")
}

export const getBeer = (id) => {
    return axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
}
