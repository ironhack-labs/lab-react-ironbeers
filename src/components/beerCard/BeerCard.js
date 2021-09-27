import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

import './BeerCard.css';

function BeerCard({ beer }) {
  const cleanText = (text) => {
    if (!text) return 'Unknown';
    else if (text.indexOf('<') > 0) return text.slice(0, text.indexOf('<'));
    else return text;
  };
  return (
    <Card className="beer-card col-12 col-md-6 col-lg-4 col-xl-3">
      <Link to={`/beers/${beer._id}`}>
        <div className="beer-img-container p-5">
          <Card.Img src={beer.image_url} className="beer-img" />
        </div>
      </Link>
      <Card.Body>
        <Link to={`/beers/${beer._id}`}>
          <Card.Title>{beer.name}</Card.Title>
          <Card.Subtitle className="mb-2 ">{beer.tagline}</Card.Subtitle>
          <Card.Text>Created by: {cleanText(beer.contributed_by)}</Card.Text>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BeerCard;
