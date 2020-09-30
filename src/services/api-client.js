import axios from 'axios';

const http = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const allBeer = () => {
  return http.get('/')
        .then((res) => res.data);
};

export const idBeer = (id) => {
    return http.get(`/${id}`)
          .then((res) => res.data);
  };

