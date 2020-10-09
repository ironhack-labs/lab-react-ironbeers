import axios from 'axios';

const http = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const getAllBeers = () => {
  return http.get('/').then((res) => res.data);
};

export const getSingleBeer = (id) => {
  return http.get(`/${id}`).then((res) => res.data);
};

export const getRandomBeer = () => {
  return http.get('/random').then((res) => res.data);
};

const BANANA = "BANANA"

export const postNewBeer = (beer) => {
//   const beer2 = {name:"BANANA",tagline: BANANA, description:BANANA, first_brewed : BANANA, 
//   attenuation_level:1,brewers_tips: BANANA }
// axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beer
// ).then(console.log)
//   console.log(beer);
//   return Promise.resolve()
  
  
  return http.post('new', beer)
    
    .then((res) => res.data).catch(console.error)
};

export const searchBeer = (param) => {
  return http.get(`/search?q=${param}`)
            .then(res => res.data)
}