import axios from 'axios'

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

// Creamos una instacia del servicio mediante axios.create (ahora hacemos get con el servicio)
const beersService = axios.create({ baseURL })

// Resolvemos la promesa en el servicio en vez del componente
// export const getAllProjects = async () => {
//   const { data } = await projectsService.get()
//   return data
// } 

export const getAllBeers = () => beersService.get('')

export const getSingleBeer = id => beersService.get(`/${id}`)

export const getRandomBeer = () => beersService.get(`/random`)

export const createBeer = beer => beersService.post('/new', beer)
