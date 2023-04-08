import axios from 'axios';

const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers';

export function getBeers() {
    return axios.get(apiUrl).then((response) => { return response.data })
}