import _api from "./api"

export const getAllBeers = () => {
    return _api.get("/")
}

export const getRandomBeer = () => {
    return _api.get("/random")
}

export const getBeerById = (id) => _api.get(`/${id}`)

export const createBeer = (data) => _api.post("/new", data)
