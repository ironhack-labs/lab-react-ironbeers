import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  // image_url
  //  description
  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => {
        this.setState({ beers: response.data });
      });
  }
  render() {
    return (
      <div className="ShowAllBeers">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={beers.image_url}
            style={{ width: "auto", height: "20%" }}
          />

          <Card.Body>
            <Card.Title>{beers.name}</Card.Title>
            <Card.Text>{beers.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default RandomBeer;
