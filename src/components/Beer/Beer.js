import React from "react";
import { Link } from 'react-router-dom';
import './Beer.css';

const Beer = ({ beer }) => {
    return (
        <div className="single-beer-div">
            <img src={beer.image_url} alt="" />
            <div className="single-beer-info">
                <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                <h4>{beer.tagline}</h4>
                <p><span>Created by: </span>{beer.contributed_by}</p>
            </div>
        </div>
    );
};

export default Beer;