
import axios from "axios"
const baseURL = 'https://ih-beers-api2.herokuapp.com'

const beersService = axios.create({ baseURL })

// export const newProject = async ({ title, description }) => {
//   const { data: project } = await beersService.post("/", {
//     title,
//     description
//   })
//   return project
// }

export const getBeers = async () => {
  const { data: beers } = await beersService.get("/beers")
  return beers
}

// export const getProject = async projectId => {
//   const { data: project } = await projectsService.get(`/${projectId}`)
//   return project
// }

// export const editProject = async (projectId, title, description) => {
//   const { data: project } = await projectsService.put(`/${projectId}`, {
//     title,
//     description
//   })
//   return project
// }

// export const deleteProject = async projectId => {
//   const { data } = await projectsService.delete(`/${projectId}`)
//   return data
// }