import axios from 'axios';


const BASE_URL = 'https://ironbeer-api.herokuapp.com/beers/all'
const BASE_URL_RANDOM = 'https://ironbeer-api.herokuapp.com/beers/random'

export const getBeers = () => {
    const url = `${BASE_URL}`;
    console.log(`Requesting beers...`);
    return fetch(url).then( res => res.json()).then(data => data)
}


export const GetOneBeer =  ({id})  => {
  return axios.get(` https://ironbeer-api.herokuapp.com/beers/single/${id}`).then(data => data);
};

export const GetRandomBeer = () => {
  const url = `${BASE_URL_RANDOM}`;
  console.log(`Requesting random beer...`);
  return fetch(url).then( res => res.json()).then(data => data)
}





