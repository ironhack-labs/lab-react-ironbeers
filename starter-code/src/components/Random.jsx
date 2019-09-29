import React, { Component } from "react";
import Navbar from "./Navb";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { randomBeer } from "../services/beers-api";
import "./../App.css";

export default class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: []
    };
  }

  componentDidMount() {
    randomBeer()
      .then(randomBeer => {
        this.setState({
          randomBeer
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const randomBeer = this.state.randomBeer;
    return (
      <div>
        <Navbar />
        <Card>
          <Row className="SingleBeer">
            <Card.Img src={randomBeer.image_url} style={{ width: "15rem" }} />{" "}
          </Row>
          <Card.Body>
            <Card.Title>{randomBeer.name}</Card.Title>
            <Card.Text>{randomBeer.tagline}</Card.Text>
            <Card.Text>{randomBeer.first_brewed}</Card.Text>
            <Card.Text>{randomBeer.attenuation_level}</Card.Text>
            <Card.Text>{randomBeer.description}</Card.Text>
            <Card.Text>
              <strong>Created By:</strong>
              {randomBeer.contributed_by}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
