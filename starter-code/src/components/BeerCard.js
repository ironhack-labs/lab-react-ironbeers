import React, { Fragment } from 'react';

const BeerCard = (props) => {

    return (
        
        <div>
            <Fragment>
                <img src={props.detail.image_url} alt="" height="100px"/>
                <h4>{props.detail.name}</h4>
                <p>{props.detail.tagline}</p>
                <p>{props.detail.contributed_by}</p>
            </Fragment>
        </div>
    )
}

export default BeerCard;