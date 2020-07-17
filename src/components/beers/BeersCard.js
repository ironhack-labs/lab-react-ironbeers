import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

import './../home/home.css'


const BeersCard = ({ image_url, name, tagline, contributed_by, _id }) => {
    return (
        <>
            <Link to={`/${_id}`}>
                <Row key={_id} className="beercard">
                    <Col xs={4}>
                        <img src={image_url} />
                    </Col>

                    <Col xs={8}>
                        <h3>{name}</h3>
                        <p className="textMuted">{tagline}</p> <br />
                        <small>Created by: {contributed_by} </small>
                    </Col>
                </Row>
                <hr />
            </Link>
        </>
    )
}
export default BeersCard