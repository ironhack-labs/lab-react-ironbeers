import React from 'react'
// import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

const BeerCard = ({ _id, name, tagline, contributed_by, image_url }) => {

    return (
        <>
            <Link to={`/OneBeer/${_id}`}>
                <img src={image_url} alt="placeHolder" />
                <h3>{name}</h3>
                <h5>{tagline}</h5>
                <p>
                    Created by:{contributed_by}
                </p>
            </Link >
        </>
    )
}


export default BeerCard

