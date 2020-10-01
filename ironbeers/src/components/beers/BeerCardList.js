import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const BeerCardList = ({ beer }) => {


    return (
        <Link to={`/beers/${beer._id}`}>

        <Card className="container" style={{ width: '15rem' }}>
        <Card.Img variant="top" src={beer.image_url} />
        <Card.Body>
                <Card.Title>{beer.name}</Card.Title>
            <Card.Text>
            {beer.tagline}
                </Card.Text>
            <p>
            {beer.contributed_by}
            </p>
        </Card.Body>
        </Card>

        </Link>
  );
};

export default BeerCardList;
