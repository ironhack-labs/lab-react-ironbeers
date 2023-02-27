import axios from 'axios';

const BASE_URL = 'https://ih-beers-api2.herokuapp.com/beers';

const beerService = axios.create({
  baseURL: BASE_URL,
});

export const getBeerById = async (id) => {
  try {
    const response = await beerService.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createNewBeer = async (data) => {
  try {
    await beerService.post('/new', data);
  } catch (error) {
    console.error(error);
  }
};