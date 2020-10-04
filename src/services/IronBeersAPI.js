import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com',
});

export const getAllBeers = async () => {
  try {
    console.log(' service -> getAllBeers ');
    const beersList = await axiosService.get('/beers');
    console.log(beersList);
    return beersList.data;
  } catch (error) {
    return error;
  }
};

export const getRandomBeer = async () => {
  try {
    console.log(' service -> getRandomBeer ');
    const randBeer = await axiosService.get('/beers/random');
    console.log(' service -> getRandomBeer ', randBeer);
    return randBeer.data;
  } catch (error) {
    return error;
  }
};

export const addNewBeer = async (newBeerInfo) => {
  try {
    console.log(' service -> addNewBeer ', newBeerInfo);
    const addResponse = await axiosService.post('/beers/new', newBeerInfo);
    console.log('addNewBeer respnse from server: ', addResponse);
    return addResponse;
  } catch (error) {
    return error;
  }
};

// export default getAllBeers;
