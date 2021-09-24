import React from 'react';
import {Link} from 'react-router-dom'
import { Container,Card } from 'react-bootstrap';

export default function HomePage() {
  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require('../../../assets/beers.png')}  />
        <Card.Body>
          <Card.Title>All Beers</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to='/allBeers'><h3>all Beers</h3></Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require('../../../assets/random-beer.png')} />
        <Card.Body>
          <Card.Title>Random Beers</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to='/random-beer'><h3>Random Beer</h3></Link>
        </Card.Body>
      </Card><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require('../../../assets/new-beer.png')} />
        <Card.Body>
          <Card.Title>New Beer</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to='/new-beer'><h3>New Beer</h3></Link>
        </Card.Body>
      </Card>
    </Container>
  );
}
