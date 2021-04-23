import React from 'react';
import { Link } from 'react-router-dom'

function BeerContainer (props) {

    return (
<div>
    <Link to={props.to}>
<img src={props.img}/>
    </Link>
    <h1>{props.title}</h1>
    <p>{props.resume}</p>
</div>
    
    );
}

export default BeerContainer;