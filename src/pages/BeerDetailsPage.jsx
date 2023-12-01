// BeerDetailsPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
    const [beerDetails, setBeerDetails] = useState({});
    const { beerId } = useParams();

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setBeerDetails(data);
        })
        .catch((error) => {
            console.error("Error fetching beer details:", error);
        })
    }, [beerId]);

    return(
        <div>
            <h2>{beerDetails.name}</h2>
            <img src={beerDetails.image_url} alt={beerDetails.name} />
            <p>{beerDetails.tagline}</p>
            <p><strong>First Brewed:</strong> {beerDetails.first_brewed}</p>
            <p><strong>Attenuation Level:</strong> {beerDetails.attenuation_level}</p>
            <p>{beerDetails.description}</p>
            <p><strong>Contributed by:</strong> {beerDetails.contributed_by}</p>
        </div>
    )
}

export default BeerDetailsPage;