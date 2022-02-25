import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinkit';

export default function Beers(props) {
    
    const { beers } = props;

    return (
        <div>
            {
                (beers.length === 0) ? 
                <div className="loading">
                    <Spinner name="pulse" color="slateblue"/> 
                </div> :
                beers.map((beer) => (
                    <div className="beer-card">
                        <div className="img-container">
                            <img src={ beer.image_url } alt={ beer.name } />
                        </div>
                        <div>
                            <Link to={ `/beers/${beer._id}` }><h2>{ beer.name }</h2></Link>
                            <h3 className="text-grey">{ beer.tagline }</h3>
                            <p><span>Created by: </span> { beer.contributed_by } </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
