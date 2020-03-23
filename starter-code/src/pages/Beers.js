import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* --- UI Framework --- */
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

/* --- Components --- */

import { Header } from "../layout/Header";

/* --- lib(api) --- */

import { listAllBeers } from "../lib/beers.api";

export const Beers = () => {
  const [beersList, setBeers] = useState([]);

  useEffect(() => {
    listAllBeers().then(beersList => setBeers(beersList));
  }, []);

  return (
    <>
      <Header />

      {beersList.map(beer => (
        <div key={beer._id}>
          <Card style={{ width: "18rem" }}>
            <Link to={`/beers/${beer._id}`}>
              <Card.Img variant="top" src={beer.image_url} alt={beer.name} />
            </Link>
            <Card.Body>
              <Card.Title>{beer.name}</Card.Title>
              <Card.Text>{beer.tagline}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem> {beer.contributed_by}</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      ))}
    </>
  );
};
