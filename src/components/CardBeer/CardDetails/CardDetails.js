import React from 'react'
import { Col, Row } from 'react-bootstrap'
// import Navbar from '../../Navbar/NavbarBeer'

export default function CardDetails(props) {
    return (
        <>
            <div className="list-group-item card-details">
                <>
                    <img src={props.beer.image_url} alt="Gran cerveza" />
                </>
                <Row>
                    <Col>
                        <h2>{props.beer.name}</h2>
                        <span>{props.beer.tagline}</span>
                    </Col>
                    <Col>
                        <p>{props.beer.first_brewed}</p>
                        <h4>{props.beer.attenuation_level}</h4>
                    </Col>
                </Row>
                <Col>
                    <h3>{props.beer.description}</h3>
                    <p>{props.beer.contributed_by}</p>
                </Col>
            </div >
        </>
    )
}
