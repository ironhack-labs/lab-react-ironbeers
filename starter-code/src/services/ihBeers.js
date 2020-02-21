import axios from 'axios'


const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

const myService=axios.create({baseURL});


export const getAllBeers=async()=>{
    const {data}=await myService.get();
    return data;
};

export const getAllBeersSize=async()=>{
    const {data}=await myService.get();
    return data.length;
}

export const getBeer=async beerID=>{
    const {data}=await myService.get(`/${beerID}`);
    return data;
};

export const createBeer=async (name,tagline,first_brewed,description,brewed_tips,attenuation_level,contributed_by)=>{
    const {data}=await myService.post('/new',{name,tagline,first_brewed,description,brewed_tips,attenuation_level,contributed_by})
    return data
};



