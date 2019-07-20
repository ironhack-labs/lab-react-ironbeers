import React from 'react'


import {Row, Col } from "reactstrap";

import { Link } from 'react-router-dom';


export default function Beer(props) {
  let beer= props.beer
  console.log(beer)
  return (
    <div className="Beer">
    <Link className="text-decoration-none link-text" to={{pathname: '/beer-detail',
    beer: beer
  }} >
   
    <Row className="p-md-5 p-0 border m-0 link-text">
    <Col sm="4"><img src={props.picUrl} className="" alt="pictureOfBeer" height="200" /></Col>
    <Col sm="8"><h1 className="link-text">{props.name}</h1><h3 className="text-muted">{props.tagline}</h3><p><span className="font-weight-bold link-text">contributed by: </span>{props.contributor}</p></Col>
    </Row>
    </Link>
    </div>
  )
}
