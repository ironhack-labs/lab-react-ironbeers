import React from 'react'


import {Row, Col } from "reactstrap";



export default function Beer(props) {
  return (
    <div className="Beer">
    <Row className="p-md-5 p-0 border m-0">
    <Col sm="4"><img src={props.picUrl} className="" alt="pictureOfBeer" height="200" /></Col>
    <Col sm="8"><h1>{props.name}</h1><h3 className="text-muted">{props.tagline}</h3><p><span className="font-weight-bold">contributed by: </span>{props.contributor}</p></Col>
    </Row>

    </div>
  )
}
