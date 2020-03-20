import axios from "axios";

const getBeers = async () => {
    const res = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
    return res.data;
};

export const getBeerById = async (beerId) => {
    const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
    return res.data;
}

export const getRandomBeer = async () => {
    const res = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
    return res.data;
}

export const addNewBeer = async (beer) => {
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beer);
    return;
}

export default getBeers;