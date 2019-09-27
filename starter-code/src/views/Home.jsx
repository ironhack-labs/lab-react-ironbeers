import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import beer from "../images/beers.png";
import beer1 from "../images/random-beer.png";
import beer2 from "../images/new-beer.png";
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Container>
          <Card style={{ width: "100%" }}>
            <Link to="/all" exact>
              <Card.Img variant="top" src={beer} />
            </Link>
            <Card.Body>
              <Card.Title>All Beers</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>

        <Container>
          <Card style={{ width: "100%" }}>
            <Link to="/random" exact>
              <Card.Img variant="top" src={beer1} />
            </Link>
            <Card.Body>
              <Card.Title>Random Beers</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <Card style={{ width: "100%" }}>
            <Link to="/new" exact>
              <Card.Img variant="top" src={beer2} />
            </Link>
            <Card.Body>
              <Card.Title>New Beers</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    );
  }
}
