import React from 'react'
import {Link} from 'react-router-dom';
/*here we can get the info for each beer, also turn each 
beer and all its content into a link to see the individual beer */
const Beer = (props) => {
    return (
     <li>
    <Link to={`/beers/${props.beer._id}`}>
     <img src={props.beer.image_url} alt=""/>
    <h2>{props.beer.name}</h2>
    <h3>{props.beer.tagline}</h3>
    <h4>{props.beer.contributed_by}</h4>
</Link>
     </li>
    )
}

export default Beer
