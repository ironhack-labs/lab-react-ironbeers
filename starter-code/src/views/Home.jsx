import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
// import Col from 'react-bootstrap/Col';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Link to="/beers">
            <Card.Img src="./../images/beers.png" />
          </Link>
          <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
              modi maxime. Magnam, dolorem? Voluptatem temporibus iusto in
              inventore aperiam placeat architecto beatae laudantium ea! Aut eos
              eveniet at quos iste.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Link to="/random-beer">
            <Card.Img src="./../images/random-beer.png" />
          </Link>
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              dolor possimus. Praesentium debitis modi hic dolorum, et
              consectetur sunt recusandae libero illo quia quae officiis
              molestias quasi impedit ut corporis!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Link to="/new-beer">
            <Card.Img src="./../images/new-beer.png" />
          </Link>
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in
              tempora nulla veritatis ab rem obcaecati? Eligendi, veritatis
              inventore sapiente minima molestiae porro nostrum assumenda
              exercitationem officiis doloribus. Voluptate, modi!
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
