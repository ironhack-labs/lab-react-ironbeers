import axios from "axios";

const getBeers = async () => {
    const res = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
    return res.data;
};


export default getBeers;