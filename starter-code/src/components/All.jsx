import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Navbar from "./Navb";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import { list } from "./../services/beers-api";

export default class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beersList: []
    };
  }

  componentDidMount() {
    list()
      .then(beersList => {
        this.setState({
          beersList
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const list = this.state.beersList;
    return (
      <Container>
        <Navbar />
        {console.log(list)}
        <ListGroup>
          {list.length === 0
            ? "Loading"
            : list.map(item => (
                <ListGroup.Item key={item._id}>
                  <Link
                    className="text-decoration-none text-reset"
                    to={`/beers/${item.name}`}
                  >
                    <Col className="col-5  justify-content-center">
                      <Card.Img
                        src={item.image_url}
                        style={{
                          width: "4rem",
                          paddingTop: "50px"
                        }}
                      />
                    </Col>
                  </Link>
                  <Col className="col-7">
                    <Card.Title style={{ paddingTop: "50px" }}>
                      {item.name}
                    </Card.Title>
                    <Card.Text>{item.tagline}</Card.Text>
                  </Col>
                </ListGroup.Item>
              ))}
        </ListGroup>
      </Container>
    );
  }
}
