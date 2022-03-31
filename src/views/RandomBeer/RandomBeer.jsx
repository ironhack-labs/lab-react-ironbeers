import React from 'react';

const RandomBeer = ({randomBeer}) => {

    console.log(randomBeer);
    return (
        <div>
            <img src={randomBeer.image_url} alt={randomBeer.name} />
            <p>{randomBeer.name}</p>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
        </div>
    );
};

export default RandomBeer;