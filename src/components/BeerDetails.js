import React from 'react'
import { Link, useParams } from "react-router-dom";

function BeerDetails({ beers }) {
    const { beerId } = useParams();
    console.log("from beers details", beers, beerId)

    const beer = beers.find((beerDet) => {
        console.log("Single Beer", beerDet);
        //beerDet map through every country in the list
        return beerDet._id === beerId;
    });
    beer && console.log("Founded Beer", beer);
    
    return (
        <div>
            <div className="img-details"><img src={beer.image_url} alt={beer.name} /></div>
            <div className="row">
                <div className="col-sm-8">
                    <h1>{beer.name}</h1>
                    <p>{beer.tagline}</p>
                </div>
                <div className="col-sm-4">
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                </div>
            </div>
            <p>{beer.description}</p>
            <p className="text-secondary">{beer.contributed_by}</p>
        </div>
    )
}

// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by

export default BeerDetails;