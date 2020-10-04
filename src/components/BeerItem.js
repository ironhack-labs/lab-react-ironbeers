import React from 'react';
import { Link } from 'react-router-dom';


function BeerItem(props) {
    console.log(props)
    return (
        <div>
            <Link to={`/beer-detail/${props.element._id}`}>
                <div>
                    <img alt="beer" src={props.element.image_url} height="150" width="100" />
                    <p>{props.element.name}</p>
                    <p>{props.element.tagline}</p>
                    <p>{props.element.contributed_by}</p>
                </div>
            </Link>
        </div>
    )
}

export default BeerItem;


