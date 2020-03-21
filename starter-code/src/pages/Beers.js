import React, { useState, useEffect } from 'react';

// Service
import { getAllBeers } from "../service";

// Components
import { BeerCard } from '../components/Beer';

export const Beers = () => {
    const [beers, setBeer] = useState();
    useEffect(() => {
        getAllBeers().then(res => { setBeer(res) })
    }, []);

    return (
        <>
            {beers && beers.map((beer, i) => {
                return (
                    <BeerCard
                        key={i}
                        id={beer._id}
                        image={beer.image_url}
                        name={beer.name}
                        tagline={beer.tagline}
                        contributed={beer.contributed_by}
                    />
                )
            })}
        </>
    );
};