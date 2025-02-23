import axios from "axios";

const http = axios.create({
    baseURL: "https://ih-beers-api2.herokuapp.com/beers",
})

http.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error(error);
        return Promise.reject(error);
    }
);


export const getAllBeers = (searchQuery) => {
    return searchQuery ? http.get(`/search?q=${searchQuery}`): http.get('/')
}

export const getBeer = (id) => http.get(`/${id}`)
export const getRandomBeer = () => http.get('/random')
export const addBeer = (beer) => http.post("/new", beer)