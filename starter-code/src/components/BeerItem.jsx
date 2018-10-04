import React, { Component } from 'react';
import { HomeItem } from './HomeItem';
import { Link } from 'react-router-dom'

const BeerItem = ({name, image_url, tagline, contributed_by, first_brewed, attenuation_level,description}) => {
    return (
        <div>
            <img alt="" url={image_url}></img>
            <h2>{name}</h2>
            <h3>{tagline}</h3>
            <p>{contributed_by}</p>
            <p>{first_brewed}</p>
            <p>{attenuation_level}</p>
            <p>{description}</p>
        </div>
    )
}

export default BeerItem;