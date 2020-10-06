import axios from 'axios';

const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const getAllBeers = async () => {
  const response = await service.get('/');
  console.log('response ', response.data);
  const allBeers = response.data;
  return allBeers;
};

export const getSingleBeer = async (id) => {
  const response = await service.get('/' + id);
  console.log('single beer ', response.data);
  return response.data;
};

export const getRandomBeer = async () => {
  const response = await service.get('/random');
  console.log('random beer ', response.data);
  return response.data;
};

export const createNewBeer = async (
  name,
  tagline,
  description,
  first_brewed,
  brewers_tips,
  attenuation_level,
  contributed_by
) => {
  const newBeer = {
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by,
  };
  const response = await service.post('/new', newBeer);
  console.log('new beer: ', response);
};
