import axios from "axios";
import React from "react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetailsPage(props) {

    const [beerDetails, setBeerDetails] = useState('');
    const [fetching, setFetching] = useState(true);

    const {beerId} = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/${beerId}`)
            .then((response) => {
                setBeerDetails(response.data);
                setFetching(false);
            })
            .catch((error) => {
                console.log('Error' + error);
            })
    }, [beerId])

    return (
        <div className="beer-details">
            {fetching ? <Loader /> : (
                <div>
                    <img src={beerDetails.image_url} alt={`${beerDetails.name} bottle`} />
                    <div className="text-beer-details">
                        <h1>{beerDetails.name}</h1>
                        <p>{beerDetails.tagline}</p>
                        <p>{beerDetails.attenuation_level}</p>
                        <p>{beerDetails.first_brewed}</p>
                        <p>{beerDetails.description}</p>
                        <p>{beerDetails.contributed_by}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BeerDetailsPage;
