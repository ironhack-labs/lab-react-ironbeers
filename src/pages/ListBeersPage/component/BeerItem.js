import React from 'react';
import './BeerItem.css';

function BeerItem(props) {
        return (
                <div className='beer-item'>
                        <img src={props.image_url} />
                        <div className='beer-item__content'>
                                <h1>{props.name}</h1>
                                <h2>{props.tagline}</h2>
                                <p><strong>Created by: </strong><span>{props.contributed_by}</span></p>
                        </div>
                </div>
        )
}

export default BeerItem
