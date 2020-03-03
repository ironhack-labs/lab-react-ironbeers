import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const BeerCard = (props) => {

    return (
        
        <div>
            <Fragment>
                <Link to="/beer-detail" className="btn btn-primary"><img src={props.detail.image_url} alt="" height="100px"/>
                <h4>{props.detail.name}</h4>
                <p>{props.detail.tagline}</p>
                <p>{props.detail.contributed_by}</p>
                </Link>
            </Fragment>
        </div>
    )
}

export default BeerCard;