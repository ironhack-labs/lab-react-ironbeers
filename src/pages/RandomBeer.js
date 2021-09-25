import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function RandomBeer() {
  const [randomBeers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setBeers(response.data);
        console.log(response.data);
        setLoading(false);
      });
  }, []);

  console.log(randomBeers);

  if (loading === true) {
    return <p>loading</p>;
  } else {
    return (
      <div className="singleBeer">
        <Card style={{ width: '18rem' }}>
          <Card.Img
            className="cardImage"
            variant="top"
            src={randomBeers.image_url}
          />
          <Card.Body>
            <Card.Title>{randomBeers.name}</Card.Title>
            <Card.Text>{randomBeers.tagline}</Card.Text>
            <Card.Text>{randomBeers.first_brewed}</Card.Text>
            <Card.Text>{randomBeers.attenuation_level}</Card.Text>
            <Card.Text>{randomBeers.description}</Card.Text>
            <Card.Text>{randomBeers.contributed_by}</Card.Text>
            <Button href={`/beers/${randomBeers._id}`} variant="primary">
              Go beer details
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default RandomBeer;
