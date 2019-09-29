import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to={`/beers`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./../../images/beers.png" />
          <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae itaque quaerat eos exercitationem dolore illum.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Link to={`/random-beer`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./../../images/random-beer.png" />
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae itaque quaerat eos exercitationem dolore illum.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Link to={`/new-beer`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./../../images/new-beer.png" />
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae itaque quaerat eos exercitationem dolore illum.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
