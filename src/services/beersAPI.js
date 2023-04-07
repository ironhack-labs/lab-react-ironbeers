import axios from "axios";

const html = "https://ih-beers-api2.herokuapp.com/beers";

const getAllBeers = () => axios.get(html).then((res) => res.data);

export { getAllBeers };
