import axios from "axios"
const baseURL = "https://ih-beers-api2.herokuapp.com/beers"

const beerService = axios.create({ baseURL })

export const getBeer = async ({ image_url, name, tagline, first_brewed,  attenuation_level, description, contributed_by }) => {
  const { data: project } = await beerService.post("/", {
    image_url,
    name,
    tagline, 
    first_brewed,
    attenuation_level, 
    description, 
    contributed_by,
  })
  return project
}