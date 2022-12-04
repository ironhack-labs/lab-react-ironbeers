import React from "react";
import Navbars from "./Navbars";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Beers = ({ beers }) => {
    return (
    <div>        
        <Navbars />
        {beers.map((beer) => {
            return(
            <div key={beer._id}>
                <img src={beer.image_url} alt="" />
                <h3>{beer.name}</h3>
                <h3>{beer.tagline}</h3>
            </div>
            );
        })}
    </div>
    );
};

export default Beers;