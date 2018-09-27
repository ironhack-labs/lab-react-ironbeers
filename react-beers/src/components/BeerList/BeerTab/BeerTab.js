import React from 'react';
import './BeerTab.css';
import { Link } from 'react-router-dom';

const BeerTab = ({ image, name, tagline, contributed_by, id }) => (
        <div className="row beer-row">
            <div className="col-3"></div>
                <div className="col-3 img-beer">
                    <img className="beer-tab" src={ image } alt="beer"/>
                </div>
                <div className="col-5 beer-info">
                    <h4 className="mb-4">{ name }</h4>
                    <p className="tagline">{ tagline }</p>
                    <p>Created by: { contributed_by.split('<')[0] }</p>
                    <Link to={`/beers/${id}`} className="moreInfo">Show more info.</Link>
                </div>
            <div className="col-1"></div>
        </div>
);


export default BeerTab;