import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default class Beers extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src="./images/beers.png" />
          <Card.Body>
            <h1>
              <Link to="/beerlist"> All Beers</Link>
            </h1>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus
              nulla, rhoncus et dui et, dictum gravida felis. In hac habitasse
              platea dictumst. Vivamus efficitur pharetra ex, varius facilisis
              velit sagittis in. Suspendisse potenti. Vivamus vestibulum, magna
              ac volutpat tristique, urna quam blandit mi, sed pretium est urna
              sit amet orci.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}
