import axios from 'axios';

const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/',
});

export const getAllBeers = async () => {
  try {
    const response = await service.get('/beers');
    const objectOfBeers = response.data;
    return objectOfBeers;
  } catch (error) {
    return error;
  }
};
