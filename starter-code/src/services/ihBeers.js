import axios from "axios"

const baseURL = "https://ih-beers-api2.herokuapp.com/beers"

const beersServices = axios.create({
    baseURL
});

export const getAllBeers=async()=>{
    const {data}=await beersServices.get();
    return data;
}