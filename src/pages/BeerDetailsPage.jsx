import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BeerDetailsPage() {
    const { beerId } = useParams();
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        const fetchBeerDetails = async () => {
            try {
                const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
                setBeer(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBeerDetails();
    }, [beerId]);

    if (!beer) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Attenuation level: {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Contributed by: {beer.contributed_by}</p>
        </div>
    );
}

export default BeerDetailsPage;
