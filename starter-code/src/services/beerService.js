import axios from "axios";

const service = axios.create({baseURL: 'https://ih-beers-api2.herokuapp.com/beers'});

export const getAllBeers = async () => {

  const res = await service.get('/');
  console.log(res.data);
  return res.data;
}

export const getBeer = async (id) => {
  const res = await service.get('/' + id);
  console.log("GetBeer " + res.data.name);
  return res.data;
}