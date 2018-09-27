import React from 'react';
import './BeerTab.css';

const BeerTab = ({ image, name, tagline, contributed_by }) => (
        <div className="row">
            <div className="col-3">
                <img src={ image } alt="beer"/>
            </div>
            <div className="col-9">
                <h4>{ name }</h4>
                <p>{ tagline }</p>
                <p>Created by: { contributed_by.split('<')[0] }</p>
            </div>
        </div>
);


export default BeerTab;