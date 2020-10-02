import axios from "axios";

export const getBeers = () => {
    return axios.get("https://ih-beers-api2.herokuapp.com/beers")
}

export const getBeer = (id) => {
    return axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
}

export const getRandomBeer = () => {
    return axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
}

export const addBeer = (body) => {
    return axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
}

// export const deleteBeer = (beerName) => {
//     return axios.delete("https://ih-beers-api2.herokuapp.com/beers/delete", {data: {name: beerName}})
// }

export const searchBeer = (query) => {
    return axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
}
