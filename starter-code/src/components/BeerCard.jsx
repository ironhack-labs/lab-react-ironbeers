import React from 'react';
import {Link}  from 'react-router-dom';

const BeerCard = ({img, name,contributed_by, tagline, id}) => {
    return (
        <div className="card-beer-component">
            <img src={img} alt=""/>
            <div>
            <h1> <Link to={`/detail/${id}`}> {name} </Link></h1>
            <small> {tagline} </small>
            <p> {contributed_by} </p>
            </div>
        </div>
    )
}

export default BeerCard;