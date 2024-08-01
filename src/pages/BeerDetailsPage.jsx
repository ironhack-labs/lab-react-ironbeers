import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BeerDetailsPage = () => {
    const { beerId } = useParams();
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                setBeer(response.data);
                console.log(response.data); // For debugging, to see the structure of the response
            })
            .catch(error => console.error(error));
    }, [beerId]);

    if (!beer) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <img src={beer.image_url} alt={beer.name} style={{ width: '100px' }} />
            <h2>{beer.name}</h2>
            <p><strong>Tagline:</strong> {beer.tagline}</p>
            <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
            <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
            <p><strong>Description:</strong> {beer.description}</p>
            <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
        </div>
    );
};

export default BeerDetailsPage;

