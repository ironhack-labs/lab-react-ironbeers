import React, { Component } from "react";
import { Card } from "react-bootstrap";


export default class BeerCard extends Component {
  render() {
    return (
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={this.props.beer.image_url} />
        <Card.Body>
          <Card.Title>{this.props.beer.name}</Card.Title>
          <Card.Text>{this.props.beer.tagline}</Card.Text>
          <Card.Text>{this.props.beer.description}</Card.Text>
          <Card.Text>{this.props.beer.contributed_by}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}