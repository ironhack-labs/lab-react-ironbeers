import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Table, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="card-group">
        <Link to={`/beers`}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/beers.png" />
            <Card.Body>
              <Card.Title>
                <h2> All Beers </h2>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to={`/random-beer`}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/random-beer.png" />
            <Card.Body>
              <Card.Title>
                <h2>Random Beer</h2>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to={`/new-beer`}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/new-beer.png" />
            <Card.Body>
              <Card.Title>
                <h2>New Beer</h2>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}
