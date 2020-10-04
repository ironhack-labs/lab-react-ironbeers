import axios from 'axios';

const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const getAllBeers = async () => {
  try {
    const response = await service.get('/');
    const objectOfBeers = response.data;
    return objectOfBeers;
  } catch (error) {
    return error;
  }
};

export const getSingleBeer = async (id) => {
  try {
    const response = await service.get(`/${id}`);
    const beer = response.data;
    return beer;
  } catch (error) {
    return error;
  }
};

export const getRandomBeer = async () => {
  try {
    const response = await service.get(`/random`);
    const beer = response.data;
    return beer;
  } catch (error) {
    return error;
  }
};
