import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class MyCards extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./assets/beers.png" />
          <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <Card.Text>
              We have a collection of all the best beers in the world
            </Card.Text>
            <Link to="/all-beers">
              <Button variant="dark">Check it out</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../src/assets/new-beer.png" />
          <Card.Body>
            <Card.Title>Create Beer</Card.Title>
            <Card.Text>You can create a new beer to our collection</Card.Text>
            <Link to="/add-beer">
              <Button variant="dark">Add Beer</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./src/assets/random-beer.png" />
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text>You can generate a random beer</Card.Text>
            <Link to="/random-beer">
              <Button variant="dark">Get Random</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
