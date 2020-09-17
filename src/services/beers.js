import axios from 'axios';
const baseURL = 'https://ih-beers-api2.herokuapp.com/beers';

const beersAPI = axios.create({ baseURL });

export const getBeers = async () => {
  const { data: beers } = await beersAPI.get('/');
  return beers;
};
export const getBeer = async (beerId) => {
  const { data: beer } = await beersAPI.get(`/${beerId}`);
  return beer;
};
export const getRandomBeer = async () => {
  const { data: beer } = await beersAPI.get(`/random`);
  return beer;
};
export const newBeer = async (value) => {
  const { data: beer } = await beersAPI.post(`/new`, {
    name: value.name,
    tagline: value.tagline,
    description: value.description,
    first_brewed: value.first_brewed,
    brewers_tips: value.brewers_tips,
    attenuation_level: value.attenuation_level,
    contributed_by: value.contributed_by,
  });
  return beer;
};
