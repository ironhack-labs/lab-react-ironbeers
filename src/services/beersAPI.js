import axios from "axios";

const html = "https://ih-beers-api2.herokuapp.com/beers";

const getAllBeers = (search) =>
  axios.get(html + "/search?q=" + search).then((res) => res.data);

const getOneBeer = (id) => axios.get(`${html}/${id}`).then((res) => res.data);

const getRandomBeer = () => axios.get(`${html}/random`).then((res) => res.data);

const postNewBeer = (newBeer) =>
  axios.post(`${html}/new`, newBeer).then((res) => res.data);

export { getAllBeers, getOneBeer, getRandomBeer, postNewBeer };
