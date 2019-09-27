import axios from "axios";

export const list = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const load = id => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/${id}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getRandom = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/random`)
      .then(response => {
        resolve(response.data);
        console.log(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const post = name => {
  return new Promise((resolve, reject) => {
    axios
      .post(`https://ih-beer-api.herokuapp.com/beers/new`, { name })
      .then(response => {
        resolve(response.data);
        console.log(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
