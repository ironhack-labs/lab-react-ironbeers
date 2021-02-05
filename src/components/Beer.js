import React from 'react'
import {Link} from 'react-router-dom'
import './Beer.css'

export default function Beer(beerInfo) {

    return (
        <div className="Beer">
            <img src={beerInfo.image_url} alt=''/>
            <div>
                <h2>Name: {beerInfo.name}</h2>
                <p>{beerInfo.tagline}</p>
                <h4>Contribuited by: {beerInfo.contributed_by}</h4>
                <Link to={`/beers/${beerInfo._id}`}>More info</Link>
            </div>
        </div>
    )
}
