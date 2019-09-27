import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container mx-5>
          <Card>
            <Card.Title>
              <Link to={"/beers"}>All Beer</Link>
            </Card.Title>
            <Card.Body>
              <img src="../../images/beers.png" alt="" />
              <Card.Text>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt commodi blanditiis, veritatis laudantium quis iste,
                dolor vero ad sed laborum quos cum possimus ut dolorum. Vitae
                eligendi ab eius vero.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Title>
              <Link to={"/randombeer"}>Random Beer</Link>
            </Card.Title>
            <Card.Body>
              <img src="../../images/random-beer.png" alt="" />
              <Card.Text>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt commodi blanditiis, veritatis laudantium quis iste,
                dolor vero ad sed laborum quos cum possimus ut dolorum. Vitae
                eligendi ab eius vero.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <Link to={"/newbeer"}>New Beer</Link>
            </Card.Title>
            <Card.Body>
              <img src="../../images/new-beer.png" alt="" />
              <Card.Text>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt commodi blanditiis, veritatis laudantium quis iste,
                dolor vero ad sed laborum quos cum possimus ut dolorum. Vitae
                eligendi ab eius vero.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
