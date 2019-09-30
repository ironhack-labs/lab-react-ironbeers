import axios from "axios";

const beerService = axios.create({
  baseURL: "/beers"
});

export const getAllBeers = () => {
  return new Promise((resolve, reject) => {
    beerService
      .get("/all")
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getOneBeer = id => {
  return new Promise((resolve, reject) => {
    beerService
      .get(`/single/${id}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getRandomBeer = () => {
  return new Promise((resolve, reject) => {
    beerService
      .get(`/random`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const addNewBeer = body => {
  console.log("BODY", body);
  return new Promise((resolve, reject) => {
    beerService
      .post("/new", body)
      .then(response => {
        console.log("RESPONSE:", response);
        resolve(response.data);
      })
      .catch(error => {
        reject("THE ERROR:", error);
      });
  });
};
