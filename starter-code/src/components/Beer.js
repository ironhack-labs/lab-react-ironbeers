import React from 'react'
import { Link } from 'react-router-dom'


function Beer({beer:{name, contributed_by, image_url, tagline, _id}}) {
    return (
            <div className="beerItem">
            <img src={image_url} />
            <div className="containerinfo" >
                <h2><Link to={`/beers/${_id}`}>{name}</Link></h2>
                <p className="tagline">{tagline}</p>
                <p className="created">Created by: {contributed_by}</p>
            </div>
         </div>
    )
}

export default Beer
