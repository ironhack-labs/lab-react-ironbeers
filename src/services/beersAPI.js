import axios from "axios";

const html = "https://ih-beers-api2.herokuapp.com/beers";

const getAllBeers = () => axios.get(html).then((res) => res.data);

const getOneBeer = (id) => axios.get(`${html}/${id}`).then((res) => res.data);

const getRandomBeer = () => axios.get(`${html}/random`).then((res) => res.data);

export { getAllBeers, getOneBeer, getRandomBeer };
