import React from 'react'
import {Link} from "react-router-dom"

const BeerCard = ({ name, image_url, tagline, contributed_by, id}) => {
    
    return (
        <>
            <img className="imgbeer"src={image_url} alt={name} />
            <Link to={`/beers/${id}`}><h2>{name}</h2></Link>
            <p>{tagline}</p>
            <p>{contributed_by}</p> 
            <hr />
            
        </>
    )
}

export default BeerCard