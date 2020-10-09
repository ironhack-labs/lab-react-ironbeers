import React from 'react';
import {Link} from 'react-router-dom';

import "../styles/Beer.css";

const Beer = ({name, image_url, tagline, _id}) => {
    
    return (
        <Link to={`/single-beer/${_id}`}> 
            <div className="beer">
            
                <div className="content-visu">
                    <img className="image" src={image_url} alt={name} />
                </div>
                
                <div className="beer-content">
                    <h2 className="beer-title">{name}</h2>
                    <h3 className="beer-tagline">{tagline}</h3>
                    <p className="beer-credits"><strong>Created by</strong>{name}</p>
                </div>
            </div>
        </Link>
    )
}

export default Beer;
