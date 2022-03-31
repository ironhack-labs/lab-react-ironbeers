import React from "react";
import './Beer.css';

const Beer = ({ beer }) => {
    return (
        <div className="single-beer-div">
            <img src={beer.image_url} alt="" />
            <div className="single-beer-info">
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p><span>Created by: </span>{beer.contributed_by}</p>
            </div>
        </div>
    );
};

export default Beer;