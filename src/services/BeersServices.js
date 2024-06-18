import axios from "axios";

const http = axios.create({
    baseURL: "https://ih-beers-api2.herokuapp.com/beers"
})

http.interceptors.response.use(
    function(response){
        return response.data
    }, function(error){
        return Promise.reject(error)
    }
)

export const listBeers = (searchQuery) => {
    return searchQuery ? http.get(`/search?q=${searchQuery}`) : http.get("/");
}

export const randomBeer = () => {
    return http.get("/random")
}

export const newBeer = (beer) => {
    return http.post("/new", beer)
}

export const detailBeer = (id) => {
    return http.get(`/${id}`)
}
