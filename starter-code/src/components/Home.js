import React, { Component } from "react";
import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
   <h1>Welcome to Beers</h1>
   <br></br>
        <Container>
          <Link to="/beers">Beers</Link> <br></br>
          <Link to="/random-beer">Random Beer</Link> <br></br>
          <Link to="/new-beer">New Beer</Link> <br></br>
        </Container>
      </>
    );
  }
}

export default Home;
