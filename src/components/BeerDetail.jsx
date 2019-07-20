import React from 'react'


import {Row, Col } from "reactstrap";



export default function BeerDetail(props) {
  console.log(props.beer)
  return (
    <div className="BeerDetail border">
    <Row className="mt-2">
    <Col sm={{ size: 12, offset: 5 }}><img className="mt-5" src={props.beer.image_url} width="100" /></Col>
    </Row>
    <Row className="mt-2">
    <Col sm="10"><h1>{props.beer.name}</h1></Col>
    <Col sm ="2"><h2 className="text-muted">{props.beer.attenuation_level}</h2></Col>
    </Row>
    <Row className="mt-2">
    <Col sm="10"><h4 classname="text-muted">{props.beer.tagline}</h4></Col>
    <Col sm ="2"><span className="font-weight-bold">{props.beer.first_brewed}</span></Col>
    </Row>
    <Row className="mt-2">
    <Col sm="12"><p classname="mt-2">{props.beer.description}</p></Col>
    </Row>
    <Row className="mt-2">
    <Col sm="12"><p classname="text-muted">{props.beer.contributed_by}</p></Col>
    </Row>

    </div>
  )
}
