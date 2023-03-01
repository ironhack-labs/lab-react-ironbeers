import axios from "axios";
const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers";

const beerApi = axios.create({
  baseURL: BASE_URL,
});

export const getAllBeers = async () => await beerApi.get();
export const createNewBeer = async (data) => await beerApi.post("/new", data);
export const getBeerById = async (id) => await beerApi.get(`/${id}`);