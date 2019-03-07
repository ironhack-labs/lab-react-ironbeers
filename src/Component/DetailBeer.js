import React from 'react'

import {Link} from "react-router-dom";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import Navbars from "./Navbar";


const DetailBeer = (props) => {
  return(
    <div>
      <p>saas</p>
      <Navbars/>
      <Card className="mt-5" style={{ width: '18rem' }}>
        <Card.Img variant="top"  className="img"  src={props.beer.image_url} />
        <Card.Body>
          <Card.Title>{props.beer.name}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem><h6>{props.beer.first_brewed}</h6></ListGroupItem>ListGroupItem>
            <ListGroupItem><p className="little">{props.beer.description}</p></ListGroupItem>
            <ListGroupItem><h6>{props.beer.tagline}</h6></ListGroupItem>
            <ListGroupItem><p>{props.beer.contributed_by}</p></ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DetailBeer