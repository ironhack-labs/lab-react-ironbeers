import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params._id}`
      )
      .then(response => {
        console.log(response.data);
        this.setState({ beer: response.data });
      });
  }
  render() {
    return (
      <div className="ShowAllBeers">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.state.beer.image_url}
            style={{ width: "auto", height: "20%" }}
          />

          <Card.Body>
            <Card.Title>{this.state.beer.name}</Card.Title>
            <Card.Text>{this.state.beer.tagline}</Card.Text>
            <Card.Text>{this.state.beer.first_brewed}</Card.Text>
            <Card.Text>{this.state.beer.attenuation_level}</Card.Text>
            <Card.Text>{this.state.beer.description}</Card.Text>
            <Card.Text>{this.state.beer.contributed_by}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default SingleBeer;
