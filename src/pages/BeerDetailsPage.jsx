import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
    const [beer, setBeers] = useState({});
    const { beerId } = useParams();

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                console.log("response.data", response.data);
                setBeers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching beer details:", error);
            });
    }, [beerId]);

    return (
        <div>
            <h2>Beer Details Page</h2>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Contributor: {beer.contributed_by}</p>
        </div>
    );
}

export default BeerDetailsPage;
