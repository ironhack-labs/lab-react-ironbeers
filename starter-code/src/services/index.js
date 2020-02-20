import axios from 'axios'

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

const beerApi = axios.create({
    baseURL
})

export const getAll = async () => {
    const {data} = await beerApi.get('/')
    console.log(data)
    return data
}

export const getBeer = async (id) => {
    const {data} = await beerApi.get(`/${id}`)
    return data
}

export const randomBeer = async () => {
    const {data} = await beerApi.get('/random')
    return data
}