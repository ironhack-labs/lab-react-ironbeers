import React from 'react';
import { Link } from 'react-router-dom';

const SingleBeer = ({
    _id,
    image_url,
    name,
    tagline,
    contributed_by
}) => {
    return(
        <div className="card h-100 d-flex flex-row flex-wrap shadow-sm m-2">
            <img className="card-img" src={image_url} alt={`${name}-beer-img`}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-text text-muted">{tagline}</h5>
                <p className="card-text"><strong>Created by: </strong>{contributed_by}</p>
                <Link to={`/beers/${_id}`} className="btn btn-outline-primary btn-sm">See details</Link>
            </div>
        </div>
    )
}

export default SingleBeer;