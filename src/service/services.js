import axios from "axios"
const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers"

const beerService = axios.create({
	baseURL: BASE_URL
})

export const getAllBeers = async () => await beerService.get()

export const getBeerById = async (id) =>
	await beerService.get(`/${id}`)


export const createNewBeer = async (data) => {
	await beerService.post("/new", data)
}


	