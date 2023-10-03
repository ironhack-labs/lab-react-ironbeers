import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetailsPage() {
    const { beerId } = useParams();
    const [foundBeer, setFoundBeer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`${apiUrl}/${beerId}`)
            .then((response) => setFoundBeer(response.data))
            .catch((error) => setError(error));
    }, [beerId]);

    if(!foundBeer) {
        return <div>Loading...</div>
    }

    console.log(foundBeer);

    return(
        <div className="container">
            <img src={foundBeer.image_url} />
            <div className="text-wrap">
                <h1>{foundBeer.name}</h1>
                <p style={{color:"grey"}}>{foundBeer.tagline}</p>
            </div>
            <div className="text-wrap">
                <p style={{color:"grey"}}>{foundBeer.attenuation_level}</p>
                <p>{foundBeer.first_brewed}</p>
            </div>
            <p>{foundBeer.description}</p>
            <p style={{color:"grey"}}>{foundBeer.contributed_by}</p>    
        </div>

    )
}

export default BeerDetailsPage;
