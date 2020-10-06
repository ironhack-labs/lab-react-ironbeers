import axios from 'axios';

const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const getAllBeers = async () => {
  const response = await service.get('/');
  return response.data;
};

export const getSingleBeer = async (id) => {
  const response = await service.get('/' + id);
  return response;
};

export const getRandomBeer = async () => {
  const response = await service.get('/random');
  return response;
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
  console.log('checking if new created: ', response);
};

export const filterBeers = async (query) => {
    const response = await service.get('/search?q=' + query);
    return response.data
} 