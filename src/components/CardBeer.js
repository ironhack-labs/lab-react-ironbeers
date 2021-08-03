import React from 'react'
import { NavLink } from 'react-router-dom'
const CardBeer = (props) =>{
    let beer = props.list
    
    return(
        
        <>
        <div className="card-beer-container">
            <NavLink to={`/beers/beer${beer._id}`} >
            <div className="card-beer">
                <div>
                    <img className="card-beer-img"src={beer.image_url}alt="beer"/>
                </div>
                <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p><span>Created by</span>: {beer.createdBy?beer.createdBy:beer.name}</p>
                </div>
            </div>
            </NavLink>
        </div>
        
        <hr/>
        </>
    )
}

export default CardBeer