import React, { Component } from "react";
import Header from "../components/header";
import { loadRandom } from "./../services/beerapi";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    loadRandom()
      .then(beer => {
        this.setState({
          beer
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const beer = this.state.beer;
    return (
      beer && (
        <div>
          <Header />
          <Container>
            <Col className="mx-auto">
              <Image className="w-25" src={beer.image_url}></Image>
              <h1>{beer.name}</h1>
              <p>{beer.tagline}</p>
              <p>{beer.description}</p>
            </Col>
          </Container>
        </div>
      )
    );
  }
}
