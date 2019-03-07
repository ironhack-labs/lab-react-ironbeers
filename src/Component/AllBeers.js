import React from 'react';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";

const AllBeers = (props) =>{
  return(

    <Card style={{ width: '18rem' }}>
      <Link to={`single/${props.beer._id}`}>
      <Card.Img variant="top"  className="img"  src={props.beer.image_url} />
      <Card.Body>
        <Card.Title>{props.beer.name}</Card.Title>
        <Card.Text>
          <h6>{props.beer.tagline}</h6>
          <p>{props.beer.contributed_by}</p>
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>


  )
};

export default AllBeers;