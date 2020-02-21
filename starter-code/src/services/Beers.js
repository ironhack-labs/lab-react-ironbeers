import axios from "axios";

const baseURL = "https://ih-beers-api2.herokuapp.com/beers";

const beersService = axios.create({
  baseURL
});

export const getAllBeers = async () => {
  const {data}  = await beersService.get();
  return data;
};
export const getBeer = async beerId => {
  const { data } = await beersService.get(`/${beerId}`);
  return data;
};

export const createBeer = async (name,
  tagline,
  description,
  first_brewed,
  brewer_tips,
  attenuation_level,
  contributed_by
  ) => {
  const { data } = await beersService.post("/new", { name,
    tagline,
    description,
    first_brewed,
    brewer_tips,
    attenuation_level,
    contributed_by
    });
  return data;
};

export const randomBeer = async () => {
  const { data } = await beersService.get("/random");
  return data;
};
