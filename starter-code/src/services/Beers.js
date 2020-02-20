import axios from "axios";

const baseURL = "https://ih-beers-api2.herokuapp.com/beers";

const beersService = axios.create({
  baseURL
});

/*export const getAllBeers = async () => {
  const { data } = await beersService.get();
  return data;
};
export const getBeer = async beerId => {
  const { data } = await beersService.get(`/${beerId}`);
  return data;
};

export const createBeer = async (title, description) => {
  const { data } = await beersService.post("/", { title, description });
  return data;
};
*/