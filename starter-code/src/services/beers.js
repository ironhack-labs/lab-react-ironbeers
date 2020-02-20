import axios from 'axios'

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

//A este metodo de axios.create le estoy pasando un objeto.
const beerService = axios.create({
    baseURL
})

export const getAllBeers = async () => {
    const { data } = await beerService.get('/')
    return data
} 

export const getBeer = async beerId => {
    const { data } = await beerService.get(`/${beerId}`)
    return data
}

export const randomBeer = async () => {
    const { data } = await beerService.get('/random')
    return data
}


