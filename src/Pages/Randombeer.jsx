import Homelink from "../components/Header/Navbar";

import { useState, useEffect } from "react";
import BeerCard from "../components/BeerCard/BeerCard";
import beersService from "../ApiService/ApiService";

const RandomBeer = () => {
    const [randomBeer, setRandomBeer] = useState([]);

    useEffect(() => {
         beersService
             .getRandomBeer()
             .then(({ data }) => {
                 setRandomBeer(data);
             })
             .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <Homelink />
            <BeerCard {...randomBeer} />
        </>
    );
};

export default RandomBeer;
