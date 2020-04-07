import Axios from "axios";
import qs from "qs";

const axios = Axios.create({
    baseURL: 'https://ih-beers-api.herokuapp.com/beers',
    withCredentials: true,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
})

const axiosUpload = Axios.create({
    baseURL: 'https://ih-beers-api.herokuapp.com/beers',
    withCredentials: true,
    headers: { 'content-type': 'multipart/form-data' }
})

export const getAllBeers= ()=> {
    return axios({
        method: "GET"
    })
    .then((response)=>{
        return (response)
    })
}

export const getOneBeer = (beerId)=> {
    return axios({
        method: "GET",
        url: `/${beerId}`
    })
    .then((response)=>{
        return (response)
    })
}

export const getRandomBeer = ()=> {
    return axios({
        method: "GET",
        url: `/random`
    })
    .then((response)=>{
        return (response)
    })
}


export const addBeer = (beer)=> {
    return axios({
        method: "POST",
        url: `/new`,
        data: qs.stringify(beer)
    })
    .then((response)=>{
        return (response)
    })
}

export const addBeerWithImage = (formData)=> {
    return axiosUpload({
        method: "POST",
        url: `/new`,
        data: formData
    })
    .then((response)=>{
        return (response)
    })
}

