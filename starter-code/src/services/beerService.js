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
  console.log("RandomBeer " + res.data.name);
  return res.data;
}