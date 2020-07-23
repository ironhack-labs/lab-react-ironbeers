import React from 'react';

export const DisplayOneBeer = ({beer}) => {
    return (
        <div>
            <img
                style={{ width: "100px" }}
                src={beer.image_url}
                alt=""
            />
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}

export default DisplayOneBeer