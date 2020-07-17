import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './../home/home.css'

const OneBeerCard = ({ image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by }) => {

    return (

        <Row className="onebeercard">
            <Col>
                <Col xs={12}>
                    <img src={image_url} alt={name} />
                </Col>

                <Row style={{marginTop: '30px'}}>
                    <Col xs={10}>
                        <h2>{name}</h2>
                    </Col>
                    <Col xs={2}>
                        <h3 className="text-muted text-right">{attenuation_level}</h3>
                    </Col>
                </Row>

                <Row>
                    <Col xs={10}>
                        <p className="text-muted">{tagline}</p>
                    </Col>
                    <Col xs={2}>
                        <p className="text-right">{first_brewed}</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <p>{description}</p>
                    </Col>

                </Row>
                <Row>
                    <Col xs={12}>
                        <small className="text-muted" >{contributed_by}</small>
                    </Col>

                </Row>
            </Col>
        </Row>

    )
}

export default OneBeerCard