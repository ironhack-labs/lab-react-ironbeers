import axios from "axios";

const BASE_URL = process.env.REACT_APP_BEERS_API

// can export a function or a variable with an anonymous function
export function getAllBeers() {
    return axios.get(`${BASE_URL}`);
}


// GET SINGLE BEER 
export const getSingleBeer = (id) => {
    return axios.get(`${BASE_URL}/${id}`)
}

// GET RANDOM BEER 
export const getRandomBeer = () => {
    return axios.get(`${BASE_URL}/random`)
}

// CREATE A NEW BEER 
export const createBeer = (newBeer) => {
    return axios.post(`${BASE_URL}/new`, newBeer)
}




// FILTER BASED ON QUERY PARAMS q that takes an word and search for that beer. if nothing passed all beears appear 
export const getFilteredBeers = (q) => {
    return axios.get(`${BASE_URL}/search`,
        {
            params: {
                q,
            }
        })
}

