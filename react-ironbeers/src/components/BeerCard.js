import React from 'react';
import {Link} from 'react-router-dom';

const BeerCard = ({beer}) => (
    <Link to={`/beers/${beer._id}`}>

            <div className="box">
                <figure  className="">
                    <img src={beer.image_url} alt={beer.name}/>
                </figure>
                <h3 className="has-text-grey-dark is-size-3">{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <strong>Created by: {beer.contributed_by}</strong>
            </div>

    </Link>
);

export default BeerCard;