import React, { Component } from "react";

import Card from "react-bootstrap/Card";

export default class RandomBeer extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src="./images/random-beer.png" />
          <Card.Body>
            <h1>Random Beer</h1>
            <Card.Text>
              Nulla sit amet pretium nulla, sed scelerisque ligula. Nulla in
              semper ipsum, id tristique velit. Vestibulum rutrum felis in
              blandit fermentum. Nunc semper dictum justo. Cras augue mauris,
              dapibus sed condimentum in, congue quis ipsum.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
