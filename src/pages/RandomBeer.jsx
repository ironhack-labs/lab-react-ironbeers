import OneBeer from "../components/OneBeer/OneBeer"
import BeersAxios from '../services/BeersAxios';
import { useState, useEffect } from "react";

const RandomBeer = () => {

    const beerAxios = new BeersAxios()
    const [randomBeer, setRandomBeer] = useState({});

    useEffect(() => {
        beerAxios
            .getBeerRandom()
            .then((oneBeer) => {
                console.log('estas en random', oneBeer)
                setRandomBeer(oneBeer);
            });
    }, []);

    return (
        <>
            <p>estas en random</p>
            <OneBeer beer={randomBeer} />
        </>
    )
}

export default RandomBeer