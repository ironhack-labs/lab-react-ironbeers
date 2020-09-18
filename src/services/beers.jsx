import axios from "axios"
const baseURL = "https://ih-beers-api2.herokuapp.com/beers"

const beersService = axios.create({
    baseURL
})

export const getBeer = async beerId => {
    const { data } = await beersService.get(`/${beerId}`)
    return data
}

export const getRandom = async () => {
    const { data } = await beersService.get('/random')
    return data 
}

export const createBeer = async ({name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }) => {
    const { data : beer } = await beersService.post("/createBeer",{
        name, 
        tagline, 
        description, 
        first_brewed, 
        brewers_tips, 
        attenuation_level, 
        contributed_by 
    });
    return beer
} 