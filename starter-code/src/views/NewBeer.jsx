import React, { Component } from "react";

import Card from "react-bootstrap/Card";

export default class NewBeer extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src="./images/new-beer.png" />
          <Card.Body>
            <h1>New Beer</h1>
            <Card.Text>
              Phasellus suscipit tristique lectus, sit amet rutrum nulla
              lobortis vitae. Integer non sem id odio posuere convallis vitae in
              nulla. Donec luctus sem et scelerisque ultricies.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
