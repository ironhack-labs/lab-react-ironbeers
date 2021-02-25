import React from 'react';

function BeerStructure({image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by}) {
    return (
        <>
            <img src={image_url} alt={name} />
            <h3>{name}</h3>
            <h4>{tagline}</h4>
            <h5>{first_brewed}</h5>
            <h4>{attenuation_level}</h4>
            <p>{description}</p>
            <h6>{contributed_by}</h6>
        </>
    )
}

export default BeerStructure