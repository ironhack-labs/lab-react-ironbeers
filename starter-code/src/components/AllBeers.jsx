import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Table, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

// export default class AllBeers extends Component {

const AllBeers = props => {
  const list = props.beersList;
  return (
    <div>
      {/* <ListGroup>
        {list.map(beer => (
          <ListGroup.Item key={beer.name}>
            <Link to={`/beers/${beer.name}`}>{beer.name}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup> */}
      <h1> AllBeers Page</h1>
    </div>
  );
};

export default AllBeers;
