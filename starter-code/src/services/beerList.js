import axios from "axios"

const baseURL = "https://ih-beers-api2.herokuapp.com/beers"

const beerService = axios.create({
    baseURL
  });
  
  export const getAllBeers = async () => {
    const { data } = await beerService.get();
    return data;
  };
  /*export const getBeer = async projectId => {
    const { data } = await beerService.get(`/${beerId}`);
    return data;
  };*/
  
  export const createBeer = async (title, description) => {
    const { data } = await beerService.post("/", { title, description });
    return data;
  };
  