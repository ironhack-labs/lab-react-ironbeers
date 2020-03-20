import React, { useState, useEffect } from "react";
import BeerInfo from "../components/BeerInfo"
import Loading from "../components/Loading"
import { getRandomBeer } from "../lib/beers.api"

const RandomBeerPage = () => {
    const [beer, setBeer] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => { getRandomBeer().then(beer => setBeer(beer)).finally(() => setLoading(false)) }, [])
    return (
        <>
            {loading && <Loading />}
            < BeerInfo beer={beer} />
        </>
    )

};

export default RandomBeerPage;