import React from "react";
import { useParams } from "react-router-dom";

function TheBeer({ beers}) {
    const { id } = useParams();
    const theBeer = beers.find(b => b._id === id);
    console.log(theBeer);
    return (
        <div className="random-beer">
            <img className="beers-img" src={theBeer.image_url} alt={theBeer.name} />
            <h1>{theBeer.name}</h1>
            <p>{theBeer.tagline}</p>
            <p>{theBeer.first_brewed}</p>
            <p>{theBeer.attenuation_level}</p>
            <p>{theBeer.description}</p>
            <p>{theBeer.contributed_by}</p>
        </div>
    );
}

export default TheBeer;