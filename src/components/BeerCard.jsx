import React from 'react';
import { Link } from 'react-router-dom';

const BeerCard = (props) => {
    return (
        <div className='col-12 col-md-6 row p-4 border-bottom'>
            <div className='col-5'>
                <img src={props.image_url} alt="beer-tag" style={{height:'200px'}}/>
            </div>
            <div className='col-7 text-left'>
                <Link to={`/beers/${props._id}`}><h5>{props.name}</h5></Link>
                <h2 className='text-secondary'>{props.tagline}</h2>
                <p>Created by: {props.contributed_by}</p>
            </div>

        </div>
    );
};

export default BeerCard;