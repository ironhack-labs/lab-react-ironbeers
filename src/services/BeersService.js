import http from "./BaseService";

export const beerList   = () => http.get("/beers")
export const beerRandom = () => http.get("/beers/random")

// export const todoDetail = (id) => http.get(`/todos/${id}`)

// export const createTodo = (body) => http.post("/todo", body)