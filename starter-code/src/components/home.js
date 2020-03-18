import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Row>
      <Link to="beers" className="col-sm-4">
        <img src="./images/beers.png" className="w-100" alt="All beers" />
        <h1>All beers</h1>
      </Link>
      <Link to="random-beer" className="col-sm-4">
        <img
          src="./images/random-beer.png"
          className="w-100"
          alt="Random beers"
        />
        <h1>Random beer</h1>
      </Link>
      <Link to="new-beer" className="col-sm-4">
        <img src="./images/new-beer.png" className="w-100" alt="New beer" />
        <h1>New beer</h1>
      </Link>
    </Row>
  );
};

export default Home;
