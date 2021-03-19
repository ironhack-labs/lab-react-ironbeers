import React from 'react';
import {Link} from "react-router-dom";

function Beer(props) {

    const { beer } = props;

    return (
        <div className="card card-custom-width" >
            <Link to={beer._id} >
                <img className="img-thumbnail" src={beer.image_url} alt="Card image cap" />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{beer.name}</h5>
                <p className="card-text">{beer.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{beer.tagline}</li>
                <li className="list-group-item">{beer.contributed_by}</li>
            </ul>
        </div>
    )
}

export default Beer