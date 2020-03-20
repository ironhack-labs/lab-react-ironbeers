import React, { useState, useEffect } from "react";
import { getBeerById } from "../lib/beers.api"
import Loading from "../components/Loading"
import BeerInfo from "../components/BeerInfo"


const BeerInfoPage = (({ beerId }) => {
    const [beer, setBeer] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => { getBeerById(beerId).then(beer => setBeer(beer)).finally(() => setLoading(false)) }, []);

    return (<>
        {loading && <Loading />}
        < BeerInfo beer={beer} />
    </>);
});

export default BeerInfoPage;