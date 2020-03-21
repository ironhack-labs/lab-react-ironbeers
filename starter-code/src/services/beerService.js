import axios from "axios";

const service = axios.create({baseURL: 'https://ih-beers-api2.herokuapp.com/beers'});

export const getAllBeers = async () => {

  const res = await service.get('/');
  return res.data;
}

export const getBeer = async (id) => {
  const res = await service.get('/' + id);
  return res.data;
}

export const getRandomBeer = async (id) => {
  const res = await service.get('/random');
  return res.data;
}

export const addBeer = async (beer) => {
  const {name, tagline, attenuation_level, first_brewed, description, contributed_by } = beer;

  const res = await service.post('/new', {
    name, 
    tagline, 
    attenuation_level, 
    first_brewed, 
    description, 
    contributed_by
  });

  console.log("New Beer " + res);
  return res.data;
}

export const getFilteredBeer = async (pattern) => {
  const res = await service.get(`/search?q=${pattern}`);
  console.log(res.data)
  return res.data;
}