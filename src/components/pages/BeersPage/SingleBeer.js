import React from 'react'
import { Col, Button, Row, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'


const SingleBeer = ({ id }) => {
    return (
        <>
        <img src=''></img>
            <h3>{name} {attenuation_level}</h3>
            <p>{tagline} {first_brewed}</p>
            {description}
            {contributed_by}

        </>
    )
}

export default SingleBeer