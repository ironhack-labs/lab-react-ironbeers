import axios from 'axios';

const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

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

export default {
  service,

  getBeers() {
    return service.get('/');
  },

  getOne(id) {
    return service.get('/' + id);
  },
};
