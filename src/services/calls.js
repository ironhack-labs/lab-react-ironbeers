import { beersApi } from "./index";

export const getAllBeers = async () => {
  try {
    const res = await beersApi.get('/')
    return res.data
  } catch (error) {
    console.log(error)
  }
};

export const getSingleBeer = async (id) => {
  try {
    const res = await beersApi.get(`/${id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
};

export const getRandomBeer = async() => {
  try {
    const res = await beersApi.get(`/random`,{
      
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
};

export const createNewBeer = ({
  name,
  tagline,
  description,
  first_brewed,
  brewers_tips,
  attenuation_level,
  contributed_by,
}) => {};

export const searchBeer = (query) =>{

}

