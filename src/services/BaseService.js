import axios from 'axios'

const http = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com'
})

http.interceptors.response.use(res => res.data)

export const getBeers = (query) => {
    return http.get('/beers/search?q=' + query)
}

export const getBeer = (id) => {
    return http.get('/beers/' + id)
}

export const getRandomBeer = () => {
    return http.get('beers/random')
}

export const createBeer = (beer) => {
    return http.post('beers/new', {
        ...beer
    })
}