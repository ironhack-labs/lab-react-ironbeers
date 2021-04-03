import axios from 'axios';

const http = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com'
})

http.interceptors.response.use(response => response.data)

export const getBeers = () => {    
    return http.get('/beers')
}

export const getBeer = (id) => {
    return http.get(`/${id}`)
    
}

export const getRamdon = () => {
    
}


export const postBeer = () => {
    
}

export const getSearch = (fields) => {
    return http.post('/posts', {
        ...fields,
        userId: 1
      })
    
}