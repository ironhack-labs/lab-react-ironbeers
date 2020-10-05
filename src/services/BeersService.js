import axios from 'axios';

const service = axios.create({
   baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const getAllBeers = () => {
    return http.get('/beers')
      .then(response => response.data)
}

/*export const getRandomBeer = async () => {
    const response = await service.get('/random');
    return response;
};
*/

