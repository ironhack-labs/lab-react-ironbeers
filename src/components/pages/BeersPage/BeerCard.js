import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {
    return (
        <>
            <Link to={`/beerdetails/${_id}`}>
                <Row className="beercard">
                    <Col className="col-6">
                        <img src={image_url} alt={name + '.jpg'}></img>
                    </Col>
                    <Col className="col-6">
                        <h3>{name}</h3>
                        <p>{tagline}</p>
                        <p>{contributed_by}</p>
                    </Col>
                </Row>
            </Link>
        </>
    )
}


export default BeerCard