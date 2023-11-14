import axios from "axios";
import React from "react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetailsPage(props) {

    const [beerDetails, setBeerDetails] = useState('');
    // const [fetching, setFetching] = useState(true);

    const {beerId} = useParams();

    useEffect(() => {
        axios.get(`${apiUrl}/${beerId}`)
            .then((response) => {
                setBeerDetails(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [beerId])

    return (
        <div className="beer-details">
            <img src={beerDetails.image_url} />
            <div className="text-beer-details">
                <h1>{beerDetails.name}</h1>
                <p>{beerDetails.tagline}</p>
                <p>{beerDetails.attenuation_level}</p>
                <p>{beerDetails.first_brewed}</p>
                <p>{beerDetails.description}</p>
                <p>{beerDetails.contributed_by}</p>    
            </div>
        </div>
    )
}

export default BeerDetailsPage;
