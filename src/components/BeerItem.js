import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'


 function BeerItem(props) {
    return (
        <div>
            <div>
                <img src={props.beers.image_url}/>
                <Link to='/beers/`${props.id}`'><h1>{props.beers.name}</h1></Link>
                <h3>{props.beers.tagline}</h3>
                <h4>Contributed by {props.beers.contributed_by}</h4>
            </div>
        </div>
    )
}


export default BeerItem
