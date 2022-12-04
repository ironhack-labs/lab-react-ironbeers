import React from 'react'
import { Link, useParams } from "react-router-dom";

function BeerDetails ({ beers }) {
    const { beerId } = useParams();

    const beer = beers.find((beerDet) => {

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
  
  export default BeerDetails;