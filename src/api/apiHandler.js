import axios from "axios";

const service = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers",
});

export default {
  service,
  getAllBeers() {
    return service.get("/");
  },
  getOneBeer(id) {
    return service.get("/" + id);
  },

  getRandomBeer() {
    return service.get("/random");
  },

  createNewBeer(newBeer) {
    return service.post("/new", newBeer);
  },
  getBeerFromDB(query) {
    return service.get("/search?q="+ query);
  }

};