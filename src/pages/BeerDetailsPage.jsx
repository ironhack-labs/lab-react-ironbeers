import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
    const { beerId } = useParams();
    const [beer, setBeer] = useState(null);

    useEffect(() => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then((response) => {
            setBeer(response.data);
        });
    }, [beerId]);

    if (!beer) {

        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{beer.name}</h2>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.tagline}</p>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p>Description: {beer.description}</p>
            <p>Contributed by: {beer.contributed_by}</p>
        </div>
    );
}

export default BeerDetailsPage;

