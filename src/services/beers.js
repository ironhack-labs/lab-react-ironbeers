import axios from 'axios'
const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

const projectService = axios.create({ baseURL })


export const getBeers = async () => {
    const { data: beers } = await projectService.get("/")
    return beers
  }

  export const getBeer = async (beerId) => {
    const { data: beer } = await projectService.get(`/${beerId}`)
    return beer
  }

  export const getRandomeBeer = async () => {
      const { data:randomBeer } = await projectService.get("/random")
      return randomBeer
  }

  export const newBeer = async (valor) => {
      const {data: newBeer} = await projectService.post("/new", {
          name: valor.name,
          tagline: valor.tagline,
          description: valor.description,
          first_brewed: valor.first_brewed,
          brewers_tips: valor.brewers_tips,
          attenuation_level: valor.attenuation_level,
          contributed_by: valor.contributed_by
  })
  return newBeer
}