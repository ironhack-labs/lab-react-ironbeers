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
      return service.get("/" + id);
    },
  
    createOne(data) {
      return service.post("/laroute-du-post", data);
    },
  };
