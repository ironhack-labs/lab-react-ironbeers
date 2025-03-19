import axios from "axios";

const http = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers"
});

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

const beersList = (query = "") => {
  if (query) {
    return http.get(`/search?q=${query}`);
  } else {
    return http.get("/");
  }
};

const beer = (id) => http.get(`/${id}`);

const newBeer = (beerData) => http.post("/new", beerData);

const randomBeer = () => http.get("/random");

export { randomBeer, beersList, beer, newBeer };