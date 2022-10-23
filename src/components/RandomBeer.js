import { useState, useEffect } from "react";
import axios from "axios";

export default function RandomBeer(props) {
    const [beer, setBeer] = useState({});

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => {
                setBeer(response.data)
            });
    }, [])

    return (
        <div>
            <img src={beer.image_url} alt="beer" />
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <h4>{beer.first_brewed}</h4>
            <h4>{beer.attenuation_level}</h4>
            <h4>{beer.description}</h4>
            <h4>{beer.contributed_by}</h4>
        </div>
    )
}