
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function BeerDetailsPage() {
    // Get the beerId param from the URL.
    let { beerId } = useParams();
    const [beerDetails, setBeerDetails] = useState(null);


    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_BASE_URL}/beers/${beerId}`)
            .then((response) => {
                setBeerDetails(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [beerId]);

    if (!beerDetails) {
        return <div> Loading... </div>
    }

    return (
        <>
        <h2> More about... </h2>
            <h1> {beerDetails.name} </h1>
            <img src={beerDetails.image_url} />
            <div>
                <h3> {beerDetails.tagline}</h3>
                <br />
                <p> First brewed: {beerDetails.first_brewed}</p>
                <p> Attenuation level: {beerDetails.attenuation_level}</p>
                <p> Description: {beerDetails.description}</p>
                <p> Contributed by: {beerDetails.contributed_by}</p>
            </div>
        </>
    );
}


export default BeerDetailsPage;
