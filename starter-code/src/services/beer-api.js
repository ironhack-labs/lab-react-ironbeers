import axios from "axios";

const beerService = axios.create({
  baseURL: "https://ironbeerapi.herokuapp.com/beers"
});

export const allBeers = () => {
  return new Promise((resolve, reject) => {
    beerService
      .get("/all")
      .then(response => {
        // console.log(response);
        resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const oneBeer = id => {
  return new Promise((resolve, reject) => {
    beerService
      .get(`/single/${id}`)
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
    beerService
      .get(`/random`)
      .then(response => {
        // console.log(response);
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
    beerService
      .post("/new", beerObj)
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

// import beerlist from "./all.json";
// export const allBeers = () => {
//   return new Promise((resolve, reject) => {
//     resolve(beerlist);
//   });
// };

// export const oneBeer = id => {
//   return new Promise((resolve, reject) => {
//     const beer = beerlist.find(beer => beer._id === id);
//     resolve(beer);
//   });
// };
