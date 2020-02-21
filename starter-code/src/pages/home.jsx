import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Link from "react-router-dom/Link";
import axios from "axios";

export default class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomBeer: ""
    };
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(beer => {
      this.setState({ randomBeer: beer.data._id });
      console.log(beer.data);
    });
  }

  render() {
    return (
      <div className="container home">
        <Link to="/beers">
          <Card>
            <Card.Img variant="top" src="./images/beers.png" />
            <Card.Body>
              <Card.Title>All beers</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to={`/beers/${this.state.randomBeer}`}>
          <Card>
            <Card.Img variant="top" src="./images/random-beer.png" />
            <Card.Body>
              <Card.Title>Random Beer</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to={`/new`}>
          <Card>
            <Card.Img variant="top" src="./images/new-beer.png" />
            <Card.Body>
              <Card.Title>New Beer</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}
