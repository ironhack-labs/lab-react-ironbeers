import axios from "axios"
const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers"
// const URL_BASE = "https://ih-beers-api2.herokuapp.com/beers/new"

// const newBeerService = axios.create({
// 	baseURL:URL_BASE
// })

const beerService = axios.create({
	baseURL: BASE_URL
})

export const getAllBeers = async () => await beerService.get()

export const getBeerById = async (id) =>
	await beerService.get(`/${id}`)


export const createNewBeer = async (data) =>
	await beerService.post('/', data)

	