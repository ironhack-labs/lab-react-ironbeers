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
        <div className="card h-100" style={{borderRadius: 0}}>
            <div className="row no-gutters">
                <div className="col-5 img-fluid">
                    <img className="card-img p-4 w-75 h-100" src={image_url} alt={`${name}-beer-img`}/>
                </div>
                <div className="col-7">
                    <div className="card-body text-left">
                        <h4 className="card-title">{name}</h4>
                        <h6 className="card-text text-muted font-weight-bold">{tagline}</h6>
                        <p className="font-small card-text "><span className="font-weight-bold">Created by: </span>{contributed_by}</p>
                    <Link to={`/beers/${_id}`} className="btn btn-outline-primary btn-sm mb-3">See details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBeer;