import React from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'
import { Card, Container, Row, Col } from "react-bootstrap"
import "./BeerBriefInfoCard.css"

const BeerBriefInfoCard = ({ image_url, name, tagline, contributed_by, _id }) => {
    return (
        <>
            <Link className="nav-link" to={`/beer/${_id}`}>
                <Container className="mt-1">
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <div className="beerBriefInfoCard mt-2">
                                <div>
                                    <img className="beerDetailsImage" src={image_url} />
                                </div>
                                <div>
                                    <p>{name}</p>
                                    <p>{tagline}</p>
                                    <p className="text-muted">{contributed_by}</p>
                                </div>
                            </div>

                        </Col >
                    </Row>
                </Container>
            </Link>
        </>

    )
}

export default BeerBriefInfoCard