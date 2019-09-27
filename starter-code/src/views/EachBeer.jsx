import React, { Component } from "react";
import Header from "../components/header";
import { load } from "./../services/beerapi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default class EachBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const id = this.props.match.params.id;
    if (prevProps.match.params.id !== id || !this.state.beer) {
      load(id)
        .then(beer => {
          this.setState({
            beer
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    const beer = this.state.beer;
    // console.log(beer);
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
