import axios from 'axios';
const service = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export default {
  service,

  getBeers() {
    return service.get("/");
  },

  getOne(id) {
    return service.get("/"+id);
  },

  getRandom(id) {
    return service.get("/random");
  },

  createOne(data) {
    return service.post("/new", data);
  },

  searchOne(data) {
    return service.get("/search?q=" + data);
  },

};