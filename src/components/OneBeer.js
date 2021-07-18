import React from 'react';

function OneBeer({ beer: {name, description, tagline, image_url, attenuation_level, contributed_by,first_brewed}}) {
    console.log('name', name)
    return (
        <div className="beerdetails-container">
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={image_url} style={{height: "200px"}}/>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h1>{name}</h1>
                <p>{attenuation_level}</p>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h6>{tagline}</h6>
                <p>{first_brewed}</p>
            </div>
            <p>{description}</p>
            <p>{contributed_by}</p>
    </div>
    )
}

export default OneBeer;
