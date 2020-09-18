import axios from "axios"
const baseURL = "https://ih-beers-api2.herokuapp.com/beers"

const beersService = axios.create({
    baseURL
})

export const getBeers = async() => {
    const {
        data: beers
    } = await beersService.get("/")
    return beers
}

export const getBeer = async beerId => {
    const {
        data
    } = await beersService.get(`/${beerId}`)
    return data
}

export const randomBeer = async() => {
    const {
        data
    } = await beersService.get('/random')
    return data
}

export const newBeer = async(value) => {
    await beersService.post('/new', value)
    return {
        message: "New beer successfully saved to database!"
    }
}

export const searchBeer = async(search) => {
    const {
        data
    } = await beersService.get(`/search?q=${search}`)
    return data
}