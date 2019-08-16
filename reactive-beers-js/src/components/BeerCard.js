import React from 'react'
import { Link } from 'react-router-dom'

//import '../styles/coaster-card.css'


const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {

    return (
        <div className="col-md-3">
            <article className="coaster-card">
                <img src={image_url} alt={name} />
                <h4>{name}</h4>
                <hr></hr>
                <Link className="btn btn-sm btn-dark" to={`/beers/${_id}`}>See more</Link>
                <p>{tagline}</p>
                <small>{contributed_by}</small>
            </article>
        </div>
    )
}

export default BeerCard