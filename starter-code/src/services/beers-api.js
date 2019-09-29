import axios from "axios";

const beersService = axios.create({
  baseURL: "https://ironbeerapi.herokuapp.com/beers",
});

export const list = () => {
  return new Promise((resolve, reject) => {
    beersService
      .get("/all")
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const load = id => {
  return new Promise((resolve, reject) => {
    beersService
      .get(`/beers/${id}`)
      .then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const randomBeer = () => {
  return new Promise((resolve, reject) => {
    beersService
      .get('/random')
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const newBeer = beerObj => {
  return new Promise((resolve, reject) => {
    beersService
      .post("/new", beerObj)
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      })
  })
}

