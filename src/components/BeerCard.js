import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BeerCard(props) {
  return (
    <Card className="beerCard">
      <Card.Img className="beerImg" variant="top" src={props.beer.image_url} />
      <Card.Body>
        <Card.Title>
          <Link to={`/beerDetails/${props.beer._id}`}>{props.beer.name}</Link>
        </Card.Title>
        <Card.Text>
          {props.beer.tagline}
          <br />
          {props.beer.contributed_by}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
