import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    console.log('beers cargadas');

    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((beers) => {
      return setBeers(beers.data);
    });
  }, []);

  return (
    <div>
      <h3>List of beers</h3>

      {beers.map((beer) => (
        <div key={beer._id} className="card cardStyle">
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img
              className="cardImage"
              variant="top"
              src={beer.image_url}
            />
            <Card.Body>
              <Card.Title>{beer.name}</Card.Title>
              <Card.Text>{beer.tagline}</Card.Text>
              <Card.Text>{beer.contributed_by}</Card.Text>
              <Button href={`/beers/${beer._id}`} variant="primary">
                Go beer details
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Beers;
