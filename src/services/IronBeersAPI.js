import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com',
});

export const getAllBeers = async () => {
  try {
    const beersList = await axiosService.get('/beers');

    return beersList.data;
  } catch (error) {
    return error;
  }
};

export const getRandomBeer = async () => {
  try {
    const randBeer = await axiosService.get('/beers/random');

    return randBeer.data;
  } catch (error) {
    return error;
  }
};

export const getBeerID = async (id) => {
  try {
    const beerInfo = await axiosService.get('/beers/' + id);

    return beerInfo.data;
  } catch (error) {
    return error;
  }
};

export const addNewBeer = async (newBeerInfo) => {
  try {
    const addResponse = await axiosService.post('/beers/new', newBeerInfo);

    return addResponse;
  } catch (error) {
    return error;
  }
};

export const searchBeers = async (srchWord) => {
  try {
    const srchResponse = await axiosService.get('/beers/search?q=' + srchWord);

    return srchResponse.data;
  } catch (error) {
    return error;
  }
};
