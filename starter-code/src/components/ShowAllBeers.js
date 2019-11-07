import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

class ShowAllBeers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  // image_url
  //  description
  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    return (
      <div className="ShowAllBeers">
        {this.state.beers.map(beer => (
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={beer.image_url}
              style={{ width: "auto", height: "20%" }}
            />

            <Card.Body>
              <Card.Title>{beer.name}</Card.Title>
              <Card.Text>{beer.tagline}</Card.Text>
              <Card.Text>{beer.contributed_by}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default ShowAllBeers;
