import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function HomePage() {
  return (
    <div>
      <Link to={`/beers`}>
        <Card style={{ width: '38rem' }}>
          <Card.Img variant="top" src="/beers.png" />
          <Card.Body>
            <Card.Title>All Beer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>

      <Link to={`/random-beer`}>
        <Card style={{ width: '38rem' }}>
          <Card.Img variant="top" src="/random-beer.png" />
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>

      <Link to={`/new-beer`}>
        <Card style={{ width: '38rem' }}>
          <Card.Img variant="top" src="/new-beer.png" />
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default HomePage;
