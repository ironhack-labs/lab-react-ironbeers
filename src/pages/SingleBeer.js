import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function SingleBeer(props) {
  const beerId = props.match.params.id;

  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((beers) => {
      setBeers(beers.data);
      setLoading(false);
    });
  }, []);

  const oneBeer = beers.find((beer) => {
    return beer._id === beerId;
  });

  if (loading === true) {
    return <p>loading</p>;
  } else {
    return (
      <div className="singleBeer">
        <Card style={{ width: '18rem' }}>
          <Card.Img
            className="cardImage"
            variant="top"
            src={oneBeer.image_url}
          />
          <Card.Body>
            <Card.Title>{oneBeer.name}</Card.Title>
            <Card.Text>{oneBeer.tagline}</Card.Text>
            <Card.Text>{oneBeer.first_brewed}</Card.Text>
            <Card.Text>{oneBeer.attenuation_level}</Card.Text>
            <Card.Text>{oneBeer.description}</Card.Text>
            <Card.Text>{oneBeer.contributed_by}</Card.Text>
            <Button href={`/beers/${oneBeer._id}`} variant="primary">
              Go beer details
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SingleBeer;
