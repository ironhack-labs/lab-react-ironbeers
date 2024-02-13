import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeersPage() {
    
    const [beer, setBeer] = useState({});

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(res => {
            setBeer(res.data);
        })
    }, [])

    return (
        <div>
            <img style={{ width: "10%" }} src={beer.image_url} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    );
}

export default RandomBeersPage;
