import React from 'react'

import { Link } from 'react-router-dom'

import './Beer-card.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const BeerCard = ({ _id, name, image_url, contributed_by }) => {
    console.log(name)
    return (
        <>
            <Col md={4}>
                <Row className="beer-card">
                    <img src={image_url} />
                    <strong>{name}</strong>
                    <Row>
                        <strong>Created by: </strong> {contributed_by}
                    </Row>
                    <Link to={`/${_id}`} className="btn">Details</Link>
                </Row>

            </Col>

        </>
    )
}

export default BeerCard