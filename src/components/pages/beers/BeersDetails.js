import React from 'react'
import './BeersDetails.css'
import { Link } from 'react-router-dom'

const BeersDetails = ({ image_url, name, tagline, contributed_by, _id }) => {


    return (
        <article className="beer-card">
            <img className="imageCardBeer" src={image_url}></img>
            <div className="card-description">
                <Link to={"/beerCard/" + _id}><h3>{name}</h3></Link>
                <p className="tagline">{tagline}</p>
                <p className="subtext"><strong>Created by:</strong> {contributed_by}</p>
            </div>
        </article>

    )
}

export default BeersDetails

