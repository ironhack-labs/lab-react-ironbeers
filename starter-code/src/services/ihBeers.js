import axios from 'axios'


const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

const myService=axios.create({baseURL});


export const getAllBeers=async()=>{
    const {data}=await myService.get();
    return data;
};

export const getBeer=async beerID=>{
    const {data}=await myService.get(`/${beerID}`);
    return data;
};

export const createNewBeer=async (name,tagline,first_brewed,description,brewed_tips,attenuation_level,contributed_by)=>{
    const {data}=await myService.post('/',{name,tagline,first_brewed,description,brewed_tips,attenuation_level,contributed_by})
    return data
};