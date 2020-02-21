import axios from 'axios'

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'
const randomBeer = 'https://ih-beers-api2.herokuapp.com/beers/random'
const newBeer = 'https://ih-beers-api2.herokuapp.com/beers/new'

//A este metodo de axios.create le estoy pasando un objeto.
const beerService = axios.create({
    baseURL
})

//Que es el baseURL?
const randomBeerService = axios.create({
    randomBeer
})

const newBeerService = axios.create({
    newBeer
})

export const getAllBeers = async () => {
    const { data } = await beerService.get('/')
    return data
} 

export const getBeer = async beerId => {
    const { data } = await beerService.get(`/${beerId}`)
    return data
}

export const getRandomBeer = async () => {
    const { data } = await randomBeerService.get('https://ih-beers-api2.herokuapp.com/beers/random')
    return data
}

export const createBeer = async (
    name, 
    tagline, 
    description, 
    first_brewed, 
    brewers_tips, 
    attenuation_level, 
    contributed_by) => {
        const { data } = await newBeerService.post('https://ih-beers-api2.herokuapp.com/beers/new', { 
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
        });
        return data;
};



