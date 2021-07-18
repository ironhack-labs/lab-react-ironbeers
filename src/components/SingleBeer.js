import React from 'react';
import { Link } from "react-router-dom";

function SingleBeer({ beer: { _id, name, tagline, image_url, contributed_by }}) {
    return (
        <Link to={`/beers/${_id}`} style={{ textDecoration: "none"}}>
            <div className="singlebeer-container">
                <div className="singlebeer-image-container">
                    <img src={image_url} />
                </div>
                <div>
                    <h3>{name}</h3>
                    <h5>{tagline}</h5>
                    <p>{contributed_by}</p>
                </div>            
            </div>
        </Link>
    )
}

export default SingleBeer;
