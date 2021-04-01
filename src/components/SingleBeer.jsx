import React from 'react';
import { Link } from 'react-router-dom';

const SingleBeer = ({
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by
}) => {
    return(
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <img src={image_url} alt={`${name}-beer-img`}/>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{body}</p>
                <Link to={`/posts/${id}`} className="btn btn-outline-primary btn-sm">See details</Link>
            </div>
        </div>
    )
}

export default SingleBeer