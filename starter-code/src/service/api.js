import axios from "axios";

const request = axios.create({
    baseURL: "https://ih-beers-api2.herokuapp.com/beers"
})

export const getAllBeers = async () => {
    const res = await request.get(`/`);
    return res.data;
}

export const getBeerDetail = async (id) => {
    const res = await request.get(`/${id}`);
    return res.data;
}

export const getRandomBeer = async () => {
    const res = await request.get(`/random`)
    return res.data;
}

export const postNewBeer = async (data) => {
    const res = await request.post(`/new`, data);
    return res.data;
}

export const getSearch = async (query) => {
    const res = await request.get(`/search?q=${query}`)
    return res.data;
}