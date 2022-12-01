import { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";
import BeersAPI from '../services/beer.service';

const RandomBeer = () => {
    const [beer, setBeer] = useState(undefined);

    useEffect(() => {
        BeersAPI.getRandomBeer().then((beer) => {
            setBeer(beer);
        });
    }, []);

    return (
        <>
            {
                beer ? (<BeerCard beer={beer} />) : (<p>Loading</p>)
            }
        </>


    );
}

export default RandomBeer;