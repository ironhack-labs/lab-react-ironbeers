import axios from 'axios'
const apiBeer = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com',
})

export const getAllBeers = async() => {
    const { data } = await apiBeer.get('/beers')
    return data;
}

export const getBeerbyId = async id => {
    const { data } = await apiBeer.get(`/beers/${id}`)
    return data;
}

export const newBeer = async beer => {
    const { data } = await apiBeer.post('/beers/new', beer)
    return data;
}

export const getRandomBeer = async() => {
    const { data } = await apiBeer.get('/beers/random')
    return data;
}